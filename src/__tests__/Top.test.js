import { render, screen } from '@testing-library/react';
import Top from '../components/Top';
import '@testing-library/jest-dom'


describe('Header Test',()=>{

    test('check heading text is Star wars api',()=>{
        render(<Top />);
        const linkElement = screen.getByText(/Star Wars Api/i);
  expect(linkElement).toBeInTheDocument();

    });



test('test header has lightsaber image and alt',()=>{
    render(<Top/>);
    const logo = screen.getByRole('img');
    
    expect(logo).toHaveAttribute('alt', 'lightsaber');


})


})