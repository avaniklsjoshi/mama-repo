/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import Skills from "../skills";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));

describe("Landing Page", () => {
  it("renders Skills", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <Skills />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("techStack")).toBeInTheDocument();
    expect(screen.getByText("tools")).toBeInTheDocument();
    expect(screen.getByText("supporting")).toBeInTheDocument();
  });
});
