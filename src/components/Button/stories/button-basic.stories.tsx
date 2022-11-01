import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button";

export default {
  title: "CoffeeUI/Button/Basic",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  variant: "primary",
  onClick: () => console.log('Primary')
};

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  variant: "success",
  onClick: () => console.log('Success')
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning",
  variant: "warning",
  onClick: () => console.log('Warning')
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger",
  variant: "danger",
  onClick: () => console.log('Danger')
};

export const Info = Template.bind({});
Info.args = {
  label: "Info",
  variant: "info",
  onClick: () => console.log('Info')
};

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  variant: "text",
  onClick: () => console.log('Text')
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  variant: "primary",
  disabled: true
};
