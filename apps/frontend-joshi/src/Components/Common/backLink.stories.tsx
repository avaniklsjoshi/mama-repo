import { withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import BackLink from "./backLink";
import girly from "../../Theme/themes/girly";

export default {
  component: BackLink,
  title: "Common/Back Link",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof BackLink>;

const Template: ComponentStory<typeof BackLink> = () => (
  <BrowserRouter>
    <ThemeProvider theme={girly}>
      <BackLink />
    </ThemeProvider>
  </BrowserRouter>
);

export const DefaultBackLink = Template.bind({});
