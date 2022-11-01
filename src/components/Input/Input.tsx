import React, { KeyboardEvent, RefObject, useRef } from 'react'
import InputProps from '../../interfaces/Input'
import classnames from 'classnames'
import './input.scss'

export const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    disabled,
    status,
    round,
    size = 'medium',
    maxLength,
    pattern,
    placeholder,
    defaultValue,
    onChange,
    onPressEnter
  } = props
  const inputRef: RefObject<HTMLInputElement> = useRef(null)

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event?.key === 'Enter' && onPressEnter) onPressEnter(event)
  }

  return (
    <input
      ref={inputRef}
      type="text"
      className={classnames(
        'input',
        `input--${status}`,
        `input--${size}`,
        { 'is-round': round },
      )}
      disabled={disabled}
      defaultValue={defaultValue}
      placeholder={placeholder}
      maxLength={maxLength}
      pattern={pattern}
      value={inputRef?.current?.value}
      onChange={onChange}
      onKeyDown={
        (event: KeyboardEvent<HTMLInputElement>) => {
          handleKeyDown(event)
        }
      }
    />
  )
}
