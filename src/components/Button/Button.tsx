import React from 'react'
import classnames from 'classnames'
import ButtonProps from '../../interfaces/Button'
import "./button.scss"

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
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
