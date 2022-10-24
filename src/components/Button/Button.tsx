import React, { ReactNode } from 'react'
import classnames from 'classnames'
import "./button.scss"

interface Props {
  size?: 'small' | 'medium' | 'large'
  variant: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'
  label?: string
  disabled?: boolean | undefined
  round?: boolean | undefined
  plain?: boolean | undefined
  children?: ReactNode
  onClick?: () => void | any
}

export const Button: React.FC<Props> = (props: Props) => {
  const {
    size = 'medium',
    variant = 'primary',
    label,
    disabled,
    round,
    plain,
    children,
    onClick
  } = props

  return (
    <button
      onClick={onClick}
      className={classnames(
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        { 'is-round': round },
        { 'is-plain': plain }
      )}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  )
}
