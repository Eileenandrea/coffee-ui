import React, { ChangeEvent, KeyboardEvent } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../Input";

export default {
  title: "CoffeeUI/Input/Basic",
  component: Input,
  argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: 'This is the default value'
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'This is the placeholder'
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 10
};

export const ChangeInputEvent = Template.bind({});
ChangeInputEvent.args = {
  onChange:
    (event: ChangeEvent<HTMLInputElement>) => {
      console.log(event?.target.value)
    }
};

export const PressEnterEvent = Template.bind({});
PressEnterEvent.args = {
  onPressEnter:
    (event: KeyboardEvent<HTMLInputElement>) => {
      console.log((event?.target as HTMLInputElement).value)
    }
};
