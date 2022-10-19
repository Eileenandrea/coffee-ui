import React from "react"
import { screen, render } from "@testing-library/react"

import Button from "../Button/Button"

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />)
    const btnLabel = screen.getByText("Hello world!")
    expect(btnLabel).toBeDefined()
  })
})
