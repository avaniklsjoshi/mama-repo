/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import girly from "../../../../Theme/themes/girly";
import SubMarine from "../Introduction/subMarine";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key, i18n: (key: any) => key })
}));

describe("Landing Page", () => {
  it("renders SubMarine", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <SubMarine />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
