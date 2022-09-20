import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./menu";

export default {
  component: Menu,
  title: "Feature Page/Menu",
  decorators: [withKnobs],
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Menu>;

const activeComponent = function () {};
const Template: ComponentStory<typeof Menu> = () => (
  <BrowserRouter>
    <Menu routeName="uiLearnings" activeComponent={activeComponent} />
  </BrowserRouter>
);

export const DefaultMenu = Template.bind({});
