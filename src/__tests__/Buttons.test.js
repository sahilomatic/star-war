import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '../components/Home/Buttons';
import '@testing-library/jest-dom'

describe('Buttons component', () => {
  test('renders buttons for each page number', () => {
    const changePage = jest.fn();
    const { getByText } = render(<Buttons changePage={changePage} />);
    for (let i = 1; i <= 9; i++) {
      const button = getByText(i.toString());
      expect(button).toBeInTheDocument();
    }
  });


  
  test('calls changePage prop with "number" and page number when a page number button is clicked', () => {
    const changePage = jest.fn();
    const { getByText } = render(<Buttons changePage={changePage} />);
    const button = getByText('3');
    fireEvent.click(button);
    expect(changePage).toHaveBeenCalledWith('number', 3);
  });

  test('calls changePage prop with "previous" when the "Previous" button is clicked', () => {
    const changePage = jest.fn();
    const { getByText } = render(<Buttons changePage={changePage} />);
    const button = getByText('Previous');
    fireEvent.click(button);
    expect(changePage).toHaveBeenCalledWith('previous');
  });

  test('calls changePage prop with "next" when the "Next" button is clicked', () => {
    const changePage = jest.fn();
    const { getByText } = render(<Buttons changePage={changePage} />);
    const button = getByText('Next');
    fireEvent.click(button);
    expect(changePage).toHaveBeenCalledWith('next');
  });

  
});
