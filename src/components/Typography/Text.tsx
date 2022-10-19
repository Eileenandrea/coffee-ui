import React from "react"
import * as CSS from "csstype"
import { TypographyProps } from "../../interfaces/Typography"

type AsProp<C extends React.ElementType> = { as?: C }

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = Record<string, unknown>,
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"]

type ComponentProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, TypographyProps>

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = Record<string, unknown>,
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }

type TextComponent = <C extends React.ElementType = "p">(
  props: ComponentProps<C>,
) => React.ReactElement | null

const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = "span">(
    { as, color, children }: ComponentProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || "span"
    const style = color ? { style: { color } } : {}
    return (
      <Component {...style} ref={ref}>
        {children}
      </Component>
    )
  },
)

export default Text
