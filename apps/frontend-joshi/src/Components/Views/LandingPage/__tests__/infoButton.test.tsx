/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import InfoButton from "../Timeline/InfoButton";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key, i18n: (key: any) => key })
}));

describe("Landing Page", () => {
  it("renders InfoButton without data", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <InfoButton
          projects={""}
          content={{
            tech: [],
            role: []
          }}
        />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.queryByText("timelineInfoTitle")).not.toBeInTheDocument();
    expect(screen.queryByText("timelineInfoRole")).not.toBeInTheDocument();
  });
  it("renders InfoButton with data", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <InfoButton
          projects={"CMS"}
          content={{
            tech: ["Javascript"],
            role: ["Software Developer"]
          }}
        />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Software Developer")).toBeInTheDocument();
    expect(screen.getByText("Javascript")).toBeInTheDocument();
  });
});
