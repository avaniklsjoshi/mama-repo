/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import girly from "../../../Theme/themes/girly";
import Layout from "../layout";
import Menu from "../menu";
import WelcomePage from "../welcomePage";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: any) => key
  })
}));

describe("Features Page", () => {
  it("Featurings: renders Welcome Page", () => {
    const msg = "Love you Joshi!";
    const { container } = render(<WelcomePage welcomeMsg={msg} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText(msg)).toBeInTheDocument();
  });
  it("Featurings: renders Features Page", () => {
    const mock = jest.fn();
    const { container } = render(
      <ThemeProvider theme={girly}>
        <BrowserRouter>
          <Menu activeComponent={mock} routeName="uiLearnings" />
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    const menuItem1 = screen.getAllByText(/Parallax Effect/i);
    expect(menuItem1[0]).toBeInTheDocument();
    const menuItem2 = screen.getAllByText(/Bubble Effect/i);
    expect(menuItem2[0]).toBeInTheDocument();
    const menuItem3 = screen.getAllByText(/Designer Title/i);
    expect(menuItem3[0]).toBeInTheDocument();
  });
  it("Featurings: renders Layout", () => {
    const SubRouteChildComponent = "Hi Avani!";
    const { container } = render(
      <ThemeProvider theme={girly}>
        <BrowserRouter>
          <Layout routeName="home">
            <div>
              <h1>{SubRouteChildComponent}</h1>
            </div>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByText(SubRouteChildComponent)).toBeInTheDocument();
  });
});
