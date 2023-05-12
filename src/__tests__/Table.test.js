import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Table from '../components/Table/Table';

describe('Table component', () => {
  const characters = [
    { name: 'Luke Skywalker', gender: 'male', homePlanet: 'Tatooine' },
    { name: 'Leia Organa', gender: 'female', homePlanet: 'Alderaan' },
    { name: 'Darth Vader', gender: 'male', homePlanet: 'Tatooine' },
  ];

  test('renders table with character data', () => {
    render(<Table characters={characters} />);
    const nameColumnHeaders = screen.getAllByText(/name/i);
    const genderColumnHeaders = screen.getAllByText(/gender/i);
    const homePlanetColumnHeaders = screen.getAllByText(/home planet/i);
    const detailsColumnHeaders = screen.getAllByText(/details/i);

    expect(nameColumnHeaders).toHaveLength(1);
    expect(genderColumnHeaders).toHaveLength(1);
    expect(homePlanetColumnHeaders).toHaveLength(1);
    

    const lukeRow = screen.getByText(/luke skywalker/i);
    const leiaRow = screen.getByText(/leia organa/i);
    const vaderRow = screen.getByText(/darth vader/i);

    expect(lukeRow).toBeInTheDocument();
    expect(leiaRow).toBeInTheDocument();
    expect(vaderRow).toBeInTheDocument();

    
 
    const details = screen.getAllByText(/details/i);
    details.map(detail=>{
      expect(detail).toBeInTheDocument();
      
    })
    
    
  });
});
