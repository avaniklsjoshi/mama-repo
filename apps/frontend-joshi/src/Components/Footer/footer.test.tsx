/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import DownloadPortfolio from "./downloadPortfolio";
import Footer from "./footer";
import Social from "./social";
import girly from "../../Theme/themes/girly";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));
Object.assign(navigator, {
  clipboard: {
    writeText: () => {}
  }
});

describe("Footer", () => {
  it("Footer Component", () => {
    const { container } = render(
      <ThemeProvider theme={girly}>
        <Footer />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
    const copyright = container.getElementsByClassName("copyright");
    expect(copyright).toBeTruthy();
  });

  it("renders DownloadPortfolio Component", () => {
    render(<DownloadPortfolio />);
    const linkElement = screen.getByText(/downloadPortfolio/i);
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(linkElement);
  });

  it("renders Social links Component", () => {
    const { container } = render(<Social />);
    expect(container).toMatchSnapshot();

    const boxes = container.getElementsByClassName("social-links");
    expect(boxes.length).toBe(4);
  });

  it("renders Social links Component share", () => {
    render(<Social />);
    const shareButton = screen.getByRole("button");
    expect(shareButton).toHaveClass("share-button");
    fireEvent.click(shareButton);
    expect(shareButton).toHaveClass("share-button");
    expect(screen.getByLabelText("🎉 Link Copied!")).toBeInTheDocument();

    jest.useFakeTimers();
    fireEvent.click(shareButton);

    // to tell the unit test that timers will update component's state
    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByText("🎉 Link Copied!")).toBeInTheDocument();

    jest.useRealTimers();
  });
});
