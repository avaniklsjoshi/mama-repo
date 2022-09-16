import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import LanguagePicker from "./languagePicker";

export default {
  component: LanguagePicker,
  title: "Header/Language Picker",
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof LanguagePicker>;
const Template: ComponentStory<typeof LanguagePicker> = () => (
  <LanguagePicker />
);

export const SelectClick = Template.bind({});
