import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import CharacterDetails from '../components/CharacterDetails/charcaterDetails';

test("renders character details", () => {
    // Mock data for selected character
    const selectedChar = {
      name: "Luke Skywalker",
      hair_color: "blond",
      eye_color: "blue",
      gender: "male",
      homePlanet: "Tatooine",
      films: ["A New Hope", "The Empire Strikes Back", "Return of the Jedi"],
    };
  
    // Set up state and props for component
    const setSelectedChar = jest.fn();
    const props = { selectedChar, setSelectedChar };
  
    // Render the component
    render(<CharacterDetails {...props} />);
  
    // Check that the character details are displayed
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByTestId("name")).toHaveTextContent("Luke Skywalker");
  
    expect(screen.getByText("Hair Colour")).toBeInTheDocument();
    expect(screen.getByTestId("hair-color")).toHaveTextContent(/Blond/i);
  
    expect(screen.getByText("Eye Colour")).toBeInTheDocument();
    expect(screen.getByTestId("eye-color")).toHaveTextContent(/Blue/i);
  
    expect(screen.getByText("Gender")).toBeInTheDocument();
    expect(screen.getByTestId("gender")).toHaveTextContent(/Male/i);
  
    expect(screen.getByText("Home Planet")).toBeInTheDocument();
    expect(screen.getByTestId("home-planet")).toHaveTextContent(/Tatooine/i);
  
    expect(screen.getByText("Movies")).toBeInTheDocument();
   
    
  
    // Test editing the gender field
    fireEvent.click(screen.getByTestId("show-input"));
    expect(screen.getByPlaceholderText("Type Gender")).toBeInTheDocument();
    fireEvent.change(screen.getByPlaceholderText("Type Gender"), {
      target: { value: "female" },
    });
    
  });