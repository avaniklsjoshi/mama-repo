import { render, screen } from "@testing-library/react";
import React from "react";
import { useTranslation } from "react-i18next";
import DownloadPortfolio from "./downloadPortfolio";
import Footer from "./footer";

jest.mock("react-i18next");

describe("Footer", () => {
  //   beforeEach(() => {
  //     useTranslation.mockReturnValue({ t: (key) => key });
  //   });

  it("renders DownloadPortfolio Component", () => {
    render(<DownloadPortfolio />);
    const linkElement = screen.getByText(/download Portfolio/i);
    expect(linkElement).toBeInTheDocument();
  });
});
