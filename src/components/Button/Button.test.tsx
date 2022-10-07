import React from "react";
import { render } from "@testing-library/react";

import Button from "../../../dist/esm/components/Button/Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
});