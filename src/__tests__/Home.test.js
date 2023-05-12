import React from "react";
import { render, screen, fireEvent, waitFor, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../components/Home/Home";
import axios from "axios";

// Mock axios requests
jest.mock("axios");


describe("Home component", () => {
  
  test("should display loader while fetching data", async () => {
    // Mock the axios request to delay for 1 second
    axios.get.mockResolvedValue({
        data: {
          results: [
            { name: "Luke Skywalker", height: "172" },
          ],
        },
      })

    const { getByText, queryByText } = render(<Home />);
    expect(getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => expect(queryByText("Loading...")).not.toBeInTheDocument());
  });

  test("should fetch data and display it in the table", async () => {
    axios.get.mockResolvedValue({data: {
      results: [
        { name: "Luke Skywalker", height: "172" },
        { name: "Darth Vader", height: "202" },
      ],
    },})
    const { getByText } = render(<Home />);

    await waitFor(() => expect(getByText("Luke Skywalker")).toBeInTheDocument());
  });

  test("should change page number when clicking next button", async () => {
    // Mock the axios request to return an empty list of characters
    axios.get.mockResolvedValue({
      data: {
        results: [],
      },
    });

    const { getByText } = render(<Home />);

    // Wait for the table to render
    await waitFor(() => expect(getByText("Page: 1")).toBeInTheDocument());

    // Click the next button
    fireEvent.click(getByText("Next"));

    // Check that the page number changes to 2
    await waitFor(() => expect(getByText("Page: 2")).toBeInTheDocument())
  });
});