/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import NotFoundPage from "./index";
import girly from "../../../Theme/themes/girly";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));

describe("Not Found Page", () => {
  it("renders NotFoundPage", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <Router>
          <NotFoundPage />
        </Router>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    const featureButton = screen.getByTestId("home-link");
    fireEvent.click(featureButton);

    expect(screen.getByText("home")).toBeInTheDocument();
  });
});
