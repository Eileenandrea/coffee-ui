import React, { ReactNode } from 'react'
import classnames from 'classnames'
import "./button.scss"

interface Props {
  size: 'small' | 'medium' | 'large'
  variant: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'
  label?: string
  disabled?: boolean
  children?: ReactNode
  onClick: () => void | any
}

export const Button: React.FC<Props> = (props: Props) => {
  const {
    size = 'medium',
    variant,
    label,
    disabled = false,
    children,
    onClick
  } = props

  return (
    <button
      onClick={onClick}
      className={
        classnames('btn', `btn-${variant}`, `btn-${size}`)
      }
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  )
}
