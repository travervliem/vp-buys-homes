import { InputHTMLAttributes } from 'react'
import { clsx } from 'clsx'

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(className)}
      style={{
        width: '100%',
        fontFamily: "'Nunito Sans','Helvetica Neue',system-ui,sans-serif",
        fontSize: '15px',
        color: '#0D1B2A',
        background: 'white',
        border: '1.5px solid #D1DCE8',
        borderRadius: '6px',
        padding: '10px 14px',
        outline: 'none',
        lineHeight: '1.5',
        transition: 'border-color 120ms, box-shadow 120ms',
      }}
      {...props}
    />
  )
}
