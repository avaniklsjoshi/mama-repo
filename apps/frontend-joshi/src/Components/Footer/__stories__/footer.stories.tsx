import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../Theme/themes/girly";

import Footer from "../footer";

export default {
  component: Footer,
  title: "Footer/Full Footer",
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <ThemeProvider theme={girly}>
    <Footer />
  </ThemeProvider>
);

export const FooterComponent = Template.bind({});
