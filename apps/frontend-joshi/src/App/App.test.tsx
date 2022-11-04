import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

// jest.mock("react-i18next", () => ({
//   // this mock makes sure any components using the translate HoC receive the t function as a prop
//   withTranslation: () => (App: { defaultProps: any }) => {
//     App.defaultProps = { ...App.defaultProps, t: () => "" };
//     return App;
//   }
// }));
jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: any) => key })
}));
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
