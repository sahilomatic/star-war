import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import StationaryComponents from "../components/Home/StationaryComponents";

describe("StationaryComponents", () => {
  test("renders the Buttons component", () => {
    const changePage = jest.fn();
    render(<StationaryComponents changePage={changePage} />);
    const buttonsElement = screen.getAllByRole("button");
    // as there are multiple elements, all elements are checked with role button
    buttonsElement.map(elem=>{
        expect(elem).toBeInTheDocument();
    })
    
    
  });
});
