import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "CoffeeUI/Input/Sizes",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};
