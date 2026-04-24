'use client'

// Address autocomplete — currently backed by Mapbox Geocoding.
// To swap providers (e.g. Google Places, LocationIQ, Smarty), replace the
// `fetchSuggestions` implementation below. The component's public props and
// behavior (input field, name/value, onChange) stay the same.
// Mapbox docs: https://docs.mapbox.com/api/search/geocoding/

import { useEffect, useId, useRef, useState } from 'react'

type Props = {
  id: string
  name: string
  placeholder?: string
  defaultValue?: string
  required?: boolean
  minLength?: number
  onChange?: (value: string) => void
}

type Suggestion = {
  id: string
  placeName: string
}

// Bias results toward the primary service area (Statesboro, GA) without
// strictly restricting — sellers outside Southeast GA can still enter out-of-
// area addresses (e.g. an inherited property).
const STATESBORO_LON_LAT = '-81.7832,32.4488'

async function fetchSuggestions(query: string, token: string, signal: AbortSignal): Promise<Suggestion[]> {
  const url = new URL(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`
  )
  url.searchParams.set('access_token', token)
  url.searchParams.set('country', 'us')
  url.searchParams.set('types', 'address')
  url.searchParams.set('autocomplete', 'true')
  url.searchParams.set('limit', '5')
  url.searchParams.set('proximity', STATESBORO_LON_LAT)

  const res = await fetch(url.toString(), { signal })
  if (!res.ok) throw new Error(`Mapbox ${res.status}`)
  const json = (await res.json()) as { features?: Array<{ id: string; place_name: string }> }
  return (json.features ?? []).map(f => ({ id: f.id, placeName: f.place_name }))
}

export function AddressAutocomplete({
  id,
  name,
  placeholder,
  defaultValue,
  required,
  minLength,
  onChange,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const listboxId = useId()
  const [value, setValue] = useState(defaultValue ?? '')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

  // Debounced fetch. Aborts in-flight requests when the user keeps typing so
  // out-of-order responses can't overwrite newer results.
  useEffect(() => {
    if (!token) return
    const trimmed = value.trim()
    if (trimmed.length < 3) {
      setSuggestions([])
      return
    }
    const controller = new AbortController()
    const t = setTimeout(() => {
      fetchSuggestions(trimmed, token, controller.signal)
        .then(results => {
          setSuggestions(results)
          setOpen(results.length > 0)
          setActiveIndex(-1)
        })
        .catch(err => {
          if (err?.name !== 'AbortError') {
            console.warn('[AddressAutocomplete] suggestion fetch failed', err)
          }
        })
    }, 250)
    return () => {
      clearTimeout(t)
      controller.abort()
    }
  }, [value, token])

  // Close dropdown on click outside.
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocMouseDown)
    return () => document.removeEventListener('mousedown', onDocMouseDown)
  }, [])

  function commit(next: string) {
    setValue(next)
    if (inputRef.current) {
      inputRef.current.value = next
      // Surface the change to anything listening (e.g. HTMLFormElement submission reads this value).
      inputRef.current.dispatchEvent(new Event('input', { bubbles: true }))
    }
    onChange?.(next)
    setOpen(false)
    setSuggestions([])
    setActiveIndex(-1)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!open || suggestions.length === 0) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(i => (i + 1) % suggestions.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(i => (i <= 0 ? suggestions.length - 1 : i - 1))
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        e.preventDefault()
        commit(suggestions[activeIndex].placeName)
      }
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        required={required}
        minLength={minLength}
        autoComplete="street-address"
        role="combobox"
        aria-expanded={open}
        aria-controls={open ? listboxId : undefined}
        aria-autocomplete="list"
        onChange={e => {
          setValue(e.currentTarget.value)
          onChange?.(e.currentTarget.value)
        }}
        onFocus={() => {
          if (suggestions.length > 0) setOpen(true)
        }}
        onKeyDown={handleKeyDown}
      />
      {open && suggestions.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            zIndex: 50,
            background: 'white',
            border: '1px solid #D1DCE8',
            borderRadius: '6px',
            boxShadow: '0 10px 30px rgba(13,27,42,0.12), 0 4px 10px rgba(13,27,42,0.06)',
            listStyle: 'none',
            margin: 0,
            padding: '4px 0',
            maxHeight: '260px',
            overflowY: 'auto',
            fontFamily: "'Nunito Sans','Helvetica Neue',system-ui,sans-serif",
            fontSize: '14px',
          }}
        >
          {suggestions.map((s, i) => (
            <li
              key={s.id}
              role="option"
              aria-selected={i === activeIndex}
              onMouseDown={e => {
                // mousedown (not click) so we commit before the input's blur closes the list.
                e.preventDefault()
                commit(s.placeName)
              }}
              onMouseEnter={() => setActiveIndex(i)}
              style={{
                padding: '10px 14px',
                cursor: 'pointer',
                color: '#0D1B2A',
                background: i === activeIndex ? '#EEF2F7' : 'transparent',
                lineHeight: 1.4,
              }}
            >
              {s.placeName}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
