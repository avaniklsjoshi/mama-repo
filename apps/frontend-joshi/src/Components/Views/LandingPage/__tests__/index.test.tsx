/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import LandingPage from "../index";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key, i18n: (key: any) => key })
}));

describe("Landing Page", () => {
  it("renders LandingPage", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <LandingPage />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
