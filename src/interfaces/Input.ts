import { ChangeEvent, KeyboardEvent } from "react"

export default interface InputProps {
  disabled?: boolean | undefined
  size?: 'small' | 'medium' | 'large'
  round?: boolean | undefined
  placeholder?: string | undefined
  maxLength?: number | undefined
  pattern?: string | undefined
  status?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
  defaultValue?: string | undefined
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onPressEnter?: (event: KeyboardEvent<HTMLInputElement>) => void 
}
