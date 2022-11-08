import { ComponentMeta, ComponentStory } from "@storybook/react";

import Social from "../social";

export default {
  component: Social,
  title: "Footer/Social",
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "dark"
    }
  }
} as ComponentMeta<typeof Social>;
const Template: ComponentStory<typeof Social> = () => <Social />;

export const SocialComponent = Template.bind({});
