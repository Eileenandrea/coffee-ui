import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "CoffeeUI/Input/Round",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const PlainRound = Template.bind({});
PlainRound.args = {
  round: true
};

export const PrimaryRound = Template.bind({});
PrimaryRound.args = {
  status: 'primary',
  round: true
};

export const SuccessRound = Template.bind({});
SuccessRound.args = {
  status: 'success',
  round: true
};

export const InfoRound = Template.bind({});
InfoRound.args = {
  status: 'info',
  round: true
}

export const WarningRound = Template.bind({});
WarningRound.args = {
  status: 'warning',
  round: true
};

export const DangerRound = Template.bind({});
DangerRound.args = {
  status: 'danger',
  round: true
};
