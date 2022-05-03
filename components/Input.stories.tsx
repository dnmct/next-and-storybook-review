import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "Input/Input",
  component: Input,
  argTypes: {
    id: {
      table: { disable: true },
    },
  },
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TextInput.args = {
  title: "Title",
  id: "title",
  type: "text",
};

export const Checkbox = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checkbox.args = {
  title: "Title",
  id: "title",
  type: "checkbox",
};

export const Radio = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Radio.args = {
  title: "Title",
  id: "title",
  type: "radio",
};

export const Select = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Select.args = {
  title: "Title",
  id: "title",
  type: "select",
  options: ["banana", "apple", "orange"],
};
