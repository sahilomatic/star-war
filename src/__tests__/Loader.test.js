import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loader from "../components/Loader";


describe("Loader", () => {
  it("renders a loading message", () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId("loader")).toHaveTextContent("Loading...");
  });
});