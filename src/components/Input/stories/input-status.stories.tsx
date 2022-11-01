import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "CoffeeUI/Input/Status",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: 'primary'
};

export const Success = Template.bind({});
Success.args = {
  status: 'success'
};

export const Info = Template.bind({});
Info.args = {
  status: 'info'
}

export const Warning = Template.bind({});
Warning.args = {
  status: 'warning'
};

export const Danger = Template.bind({});
Danger.args = {
  status: 'danger'
};
