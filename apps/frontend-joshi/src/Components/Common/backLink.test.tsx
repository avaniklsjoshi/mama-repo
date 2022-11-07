/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import BackLink from "./backLink";
import girly from "../../Theme/themes/girly";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));

describe("BackLink", () => {
  it("renders BackLink", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <Router>
          <BackLink />
        </Router>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    const featureButton = screen.getByTestId("back-link");
    fireEvent.click(featureButton);

    expect(screen.getByText("back")).toBeInTheDocument();
  });
});
