import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "CoffeeUI/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  size: "medium",
  variant: "primary",
  disabled: false,
};

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  size: "medium",
  variant: "success",
  disabled: false,
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning",
  size: "medium",
  variant: "warning",
  disabled: false,
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger",
  size: "medium",
  variant: "danger",
  disabled: false,
};

export const Info = Template.bind({});
Info.args = {
  label: "Info",
  size: "medium",
  variant: "info",
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  size: "medium",
  variant: "text",
  disabled: false,
};
