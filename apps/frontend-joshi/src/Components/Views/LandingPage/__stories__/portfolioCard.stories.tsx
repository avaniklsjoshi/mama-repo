import { withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import PortfolioCard from "../portfolioCard";

export default {
  component: PortfolioCard,
  title: "Landing Page/PortfolioCard",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof PortfolioCard>;

const Template: ComponentStory<typeof PortfolioCard> = () => (
  <ThemeProvider theme={girly}>
    <PortfolioCard />
  </ThemeProvider>
);

export const PortfolioCardContainer = Template.bind({});
