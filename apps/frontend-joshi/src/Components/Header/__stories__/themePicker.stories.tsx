import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ThemePicker from "../themePicker";

export default {
  component: ThemePicker,
  title: "Header/Theme Picker",
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof ThemePicker>;
const Template: ComponentStory<typeof ThemePicker> = () => <ThemePicker />;

export const ThemePickerComponent = Template.bind({});
export const ClickingTheme = Template.bind({});
ClickingTheme.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  //userEvent.click(canvas.getByRole("button"));
};
