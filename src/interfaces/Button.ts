import { ReactNode } from "react"

export default interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  variant: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'
  label?: string
  disabled?: boolean | undefined
  round?: boolean | undefined
  plain?: boolean | undefined
  children?: ReactNode
  onClick?: () => void | any
}
