/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import PortfolioCard from "../portfolioCard";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));

describe("Landing Page", () => {
  it("renders Portfolio Card", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <PortfolioCard />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("fullName")).toBeInTheDocument();
  });
});
