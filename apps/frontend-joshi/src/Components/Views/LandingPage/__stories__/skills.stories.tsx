import { withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import Skills from "../skills";

export default {
  component: Skills,
  title: "Landing Page/Skills",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Skills>;

const Template: ComponentStory<typeof Skills> = () => (
  <ThemeProvider theme={girly}>
    <Skills />
  </ThemeProvider>
);

export const SkillsContainer = Template.bind({});
