import React, { useRef } from "react"
import "./Button.css"
import Text from "../Typography/Text"
export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>
}
export default Button
