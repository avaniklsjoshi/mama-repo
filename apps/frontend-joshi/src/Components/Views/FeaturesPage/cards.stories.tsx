import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cards from "./cards";

export default {
  component: Cards,
  title: "Feature Page/Cards",
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Cards>;
const Template: ComponentStory<typeof Cards> = () => (
  <BrowserRouter>
    <Cards />
  </BrowserRouter>
);

export const SelectClick = Template.bind({});
