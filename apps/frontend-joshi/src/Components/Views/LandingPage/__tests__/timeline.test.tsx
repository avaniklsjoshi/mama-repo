/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import Timeline from "../Timeline/timeline";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: any) => key,
    i18n: (language: any) => language
  })
}));

describe("Landing Page", () => {
  it("renders Timeline", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <Timeline />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("timelineTitle")).toBeInTheDocument();
  });
});
