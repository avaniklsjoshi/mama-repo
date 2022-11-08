import { withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import InfoButton from "../Timeline/infoButton";

export default {
  component: InfoButton,
  title: "Landing Page/InfoButton",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof InfoButton>;

const Template: ComponentStory<typeof InfoButton> = () => (
  <ThemeProvider theme={girly}>
    <InfoButton
      projects={"CMS"}
      content={{
        tech: ["Javascript"],
        role: ["Software Developer"]
      }}
    />
  </ThemeProvider>
);

export const InfoButtonContainer = Template.bind({});
