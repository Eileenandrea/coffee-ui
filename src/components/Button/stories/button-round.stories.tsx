import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button";

export default {
  title: "CoffeeUI/Button/Round",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RoundedSmall = Template.bind({});
RoundedSmall.args = {
  label: "Rounded Small",
  size: "small",
  round: true
};

export const RoundedMedium = Template.bind({});
RoundedMedium.args = {
  label: "Rounded Medium",
  size: "medium",
  round: true
};

export const RoundedLarge = Template.bind({});
RoundedLarge.args = {
  label: "Rounded Large",
  size: "large",
  round: true
};
