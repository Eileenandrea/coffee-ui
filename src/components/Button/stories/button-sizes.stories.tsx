import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button";

export default {
  title: "CoffeeUI/Button/Sizes",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  label: "Small",
  size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
  label: "Medium",
  size: "medium"
};

export const Large = Template.bind({});
Large.args = {
  label: "Large",
  size: "large"
};
