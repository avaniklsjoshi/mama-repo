/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */ import {
  act,
  fireEvent,
  render,
  screen
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "./header";
import LanguagePicker from "./languagePicker";
import ThemePicker from "./themePicker";
import girly from "../../Theme/themes/girly";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));

describe("Header", () => {
  it("renders Header", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <Router>
          <Header />
        </Router>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    const featureButton = screen.getByTestId("feature-button");
    fireEvent.click(featureButton);

    const homeButton = screen.getByTestId("home-button");
    fireEvent.click(homeButton);
    expect(screen.getByText("avani")).toBeInTheDocument();
  });
  it("renders Header ThemePicker", () => {
    const { container } = render(<ThemePicker />);
    expect(container).toMatchSnapshot();

    const selectTheme = screen.getByTestId("select-theme");
    fireEvent.change(selectTheme);
  });
  it("renders Header LanguagePicker", () => {
    const { container } = render(<LanguagePicker />);
    expect(container).toMatchSnapshot();

    const selectLang = screen.getByTestId("language-select");
    fireEvent.change(selectLang);
  });
});
