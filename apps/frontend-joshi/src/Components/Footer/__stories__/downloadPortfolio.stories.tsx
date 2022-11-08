import { ComponentMeta, ComponentStory } from "@storybook/react";

import DownloadPortfolio from "../downloadPortfolio";

export default {
  component: DownloadPortfolio,
  title: "Footer/Download Portfolio button",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof DownloadPortfolio>;
const Template: ComponentStory<typeof DownloadPortfolio> = () => (
  <DownloadPortfolio />
);

export const DownloadPortfolioButton = Template.bind({});
