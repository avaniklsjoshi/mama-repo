import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

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
    <Cards
      cardsList={[
        {
          path: "miscellaneousCoolStuff",
          title: "cardMiscellaneousTitle",
          description: "cardMiscellaneousDescription",
          thumbnail: "../../Assets/Images/launch.png",
          information: "cardMiscellaneousInformation"
        }
      ]}
    />
  </BrowserRouter>
);

export const SelectClick = Template.bind({});
