/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import Cards from "../cards";
import FeaturesPage from "../index";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: any) => key
  })
}));

describe("Features Page", () => {
  it("renders Features Page", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <BrowserRouter>
          <FeaturesPage />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("cardMiscellaneousTitle")).toBeInTheDocument();
    expect(
      screen.getByText("cardMiscellaneousDescription")
    ).toBeInTheDocument();
    expect(screen.getByText("cardUITitle")).toBeInTheDocument();
    expect(screen.getByText("cardUIDescription")).toBeInTheDocument();
    expect(screen.getByText("cardReactAndJSTitle")).toBeInTheDocument();
    expect(screen.getByText("cardReactAndJSDescription")).toBeInTheDocument();
  });
  it("renders Features Page Cards", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
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
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("cardMiscellaneousTitle")).toBeInTheDocument();
    expect(
      screen.getByText("cardMiscellaneousDescription")
    ).toBeInTheDocument();

    const cardButton = screen.getByTestId("feature-card-mui");
    fireEvent.click(cardButton);
    const likeButton = screen.getByTestId("feature-card-like-mui");
    fireEvent.click(likeButton);
    const shareButton = screen.getByTestId("feature-card-share-mui");
    fireEvent.click(shareButton);
    const infoButton = screen.getByTestId("info-card-mui");
    fireEvent.click(infoButton);
  });
});
