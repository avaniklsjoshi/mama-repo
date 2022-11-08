import { withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import Goals from "../goals";

export default {
  component: Goals,
  title: "Landing Page/Goals",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Goals>;

const Template: ComponentStory<typeof Goals> = () => (
  <ThemeProvider theme={girly}>
    <Goals />
  </ThemeProvider>
);

export const DefaultGoals = Template.bind({});
