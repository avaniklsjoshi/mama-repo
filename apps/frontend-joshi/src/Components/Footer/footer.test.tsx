import { act, fireEvent, render, screen } from "@testing-library/react";
import DownloadPortfolio from "./downloadPortfolio";
import Social from "./social";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));
Object.assign(navigator, {
  clipboard: {
    writeText: () => {}
  }
});

describe("Footer", () => {
  it("renders DownloadPortfolio Component", () => {
    render(<DownloadPortfolio />);
    const linkElement = screen.getByText(/downloadPortfolio/i);
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(linkElement);
  });

  it("renders Social links Component", () => {
    const { container } = render(<Social />);
    expect(container).toMatchSnapshot();

    // eslint-disable-next-line testing-library/no-node-access, testing-library/no-container
    const boxes = container.getElementsByClassName("social-links");
    console.log(boxes.length);
    expect(boxes.length).toBe(4);
  });

  it("renders Social links Component share", () => {
    const { container } = render(<Social />);
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
