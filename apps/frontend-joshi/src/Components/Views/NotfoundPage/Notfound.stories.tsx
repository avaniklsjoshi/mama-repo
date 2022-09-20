import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFoundPage from "./index";

export default {
  component: NotFoundPage,
  title: "Not Found Page/Index",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof NotFoundPage>;

const activeComponent = function () {};
const Template: ComponentStory<typeof NotFoundPage> = () => (
  <BrowserRouter>
    <NotFoundPage />
  </BrowserRouter>
);

export const DefaultNotFoundPage = Template.bind({});
