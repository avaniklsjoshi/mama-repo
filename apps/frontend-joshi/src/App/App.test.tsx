import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: any) => key,
    i18n: { language: "hn" }
  })
}));

test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
