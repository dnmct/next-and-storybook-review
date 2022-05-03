import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form } from "./Form";

export default {
  title: "Input/Form",
  component: Form,
  argTypes: {},
} as ComponentMeta<typeof Form>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  title: "My Form",
};
