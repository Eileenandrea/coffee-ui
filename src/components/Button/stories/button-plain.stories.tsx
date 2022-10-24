import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button";

export default {
  title: "CoffeeUI/Button/Plain",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary",
  variant: "primary",
  plain: true,
  onClick: () => console.log('Primary')
};

export const Success = Template.bind({});
Success.args = {
  label: "Success",
  variant: "success",
  plain: true,
  onClick: () => console.log('Success')
};

export const Warning = Template.bind({});
Warning.args = {
  label: "Warning",
  variant: "warning",
  plain: true,
  onClick: () => console.log('Warning')
};

export const Danger = Template.bind({});
Danger.args = {
  label: "Danger",
  variant: "danger",
  plain: true,
  onClick: () => console.log('Danger')
};

export const Info = Template.bind({});
Info.args = {
  label: "Info",
  variant: "info",
  plain: true,
  onClick: () => console.log('Info')
};

export const Text = Template.bind({});
Text.args = {
  label: "Text",
  variant: "text",
  plain: true,
  onClick: () => console.log('Text')
};
