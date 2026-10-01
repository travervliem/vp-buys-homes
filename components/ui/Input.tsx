import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, forwardRef, ReactNode } from 'react'

type Size = 'md' | 'lg'

type FieldProps = {
  label?: string
  hint?: string
  error?: string
  required?: boolean
  children: ReactNode
  className?: string
  htmlFor?: string
}

const labelClass =
  'font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-500'

const hintClass = 'font-body text-[11px] text-ink-400 mt-1'
const errorClass = 'font-body text-[12px] text-danger mt-1'

export function Field({ label, hint, error, required, children, className = '', htmlFor }: FieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={htmlFor} className={labelClass}>
          {label}
          {required && <span className="text-amber ml-0.5">*</span>}
        </label>
      )}
      {children}
      {hint && !error && <p className={hintClass}>{hint}</p>}
      {error && <p className={errorClass}>{error}</p>}
    </div>
  )
}

const controlBase =
  'w-full font-body text-[15px] text-ink-900 bg-white border border-[#D1DCE8] rounded-md ' +
  'outline-none transition-[border-color,box-shadow] duration-150 ' +
  'placeholder:text-ink-400 ' +
  'focus:border-navy focus:shadow-[0_0_0_3px_rgba(27,54,93,0.12)]'

const sizeMap: Record<Size, string> = {
  md: 'h-10 px-3.5 py-2',
  lg: 'h-11 px-3.5 py-2.5',
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & { sizeVariant?: Size }
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { sizeVariant = 'lg', className = '', ...rest }, ref
) {
  return <input ref={ref} className={`${controlBase} ${sizeMap[sizeVariant]} ${className}`} {...rest} />
})

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { className = '', rows = 3, ...rest }, ref
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={`${controlBase} px-3.5 py-2.5 leading-[1.5] resize-vertical min-h-[80px] ${className}`}
      {...rest}
    />
  )
})

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & { sizeVariant?: Size }
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { sizeVariant = 'lg', className = '', children, ...rest }, ref
) {
  return (
    <select
      ref={ref}
      className={`${controlBase} ${sizeMap[sizeVariant]} appearance-none pr-9 cursor-pointer bg-no-repeat bg-[right_14px_center] ${className}`}
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1l5 5 5-5' stroke='%231B365D' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
      }}
      {...rest}
    >
      {children}
    </select>
  )
})
