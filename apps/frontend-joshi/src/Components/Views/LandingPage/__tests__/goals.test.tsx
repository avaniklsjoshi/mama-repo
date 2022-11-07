/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import Goals from "../goals";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));

describe("Landing Page", () => {
  it("renders Goals", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <Goals />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("myInterests")).toBeInTheDocument();
  });
});
