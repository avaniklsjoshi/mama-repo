import { withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import Submarine from "../Introduction/subMarine";

export default {
  component: Submarine,
  title: "Landing Page/Submarine",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Submarine>;

const Template: ComponentStory<typeof Submarine> = () => (
  <ThemeProvider theme={girly}>
    <Submarine />
  </ThemeProvider>
);

export const SubmarineContainer = Template.bind({});
