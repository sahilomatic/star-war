import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import axios from 'axios';
import MovieList from '../components/CharacterDetails/movieList';

jest.mock('axios');

describe('MovieList component', () => {
  test('renders without errors', () => {
    render(<MovieList films={[]} />);
    expect(screen.getByText('Movies')).toBeInTheDocument();
  });

  test('displays a loader when fetching data from the API', async () => {
    axios.get.mockResolvedValue({
      "data": {
          "title": "A New Hope",
          "episode_id": 4,
          "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
          "director": "George Lucas",
          "producer": "Gary Kurtz, Rick McCallum",
          "release_date": "1977-05-25",
          "characters": [
              "https://swapi.dev/api/people/1/",
              "https://swapi.dev/api/people/2/",
              "https://swapi.dev/api/people/3/",
              "https://swapi.dev/api/people/4/",
              "https://swapi.dev/api/people/5/",
              "https://swapi.dev/api/people/6/",
              "https://swapi.dev/api/people/7/",
              "https://swapi.dev/api/people/8/",
              "https://swapi.dev/api/people/9/",
              "https://swapi.dev/api/people/10/",
              "https://swapi.dev/api/people/12/",
              "https://swapi.dev/api/people/13/",
              "https://swapi.dev/api/people/14/",
              "https://swapi.dev/api/people/15/",
              "https://swapi.dev/api/people/16/",
              "https://swapi.dev/api/people/18/",
              "https://swapi.dev/api/people/19/",
              "https://swapi.dev/api/people/81/"
          ],
          "planets": [
              "https://swapi.dev/api/planets/1/",
              "https://swapi.dev/api/planets/2/",
              "https://swapi.dev/api/planets/3/"
          ],
          "starships": [
              "https://swapi.dev/api/starships/2/",
              "https://swapi.dev/api/starships/3/",
              "https://swapi.dev/api/starships/5/",
              "https://swapi.dev/api/starships/9/",
              "https://swapi.dev/api/starships/10/",
              "https://swapi.dev/api/starships/11/",
              "https://swapi.dev/api/starships/12/",
              "https://swapi.dev/api/starships/13/"
          ],
          "vehicles": [
              "https://swapi.dev/api/vehicles/4/",
              "https://swapi.dev/api/vehicles/6/",
              "https://swapi.dev/api/vehicles/7/",
              "https://swapi.dev/api/vehicles/8/"
          ],
          "species": [
              "https://swapi.dev/api/species/1/",
              "https://swapi.dev/api/species/2/",
              "https://swapi.dev/api/species/3/",
              "https://swapi.dev/api/species/4/",
              "https://swapi.dev/api/species/5/"
          ],
          "created": "2014-12-10T14:23:31.880000Z",
          "edited": "2014-12-20T19:49:45.256000Z",
          "url": "https://swapi.dev/api/films/1/"
      },

  });
    render(<MovieList films={['https://api.example.com/movies/1']} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  });

  test('displays the movie titles after fetching data from the API', async () => {
    axios.get.mockResolvedValueOnce({ data: { title: 'Movie 1' } });
    axios.get.mockResolvedValueOnce({ data: { title: 'Movie 2' } });
    render(<MovieList films={['https://api.example.com/movies/1', 'https://api.example.com/movies/2']} />);
    await waitFor(() => expect(screen.queryAllByRole('listitem')).toHaveLength(2));
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

  test('displays the correct movie titles after fetching data from the API', async () => {
    axios.get.mockResolvedValueOnce({ data: { title: 'Movie 1' } });
    axios.get.mockResolvedValueOnce({ data: { title: 'Movie 2' } });
    render(<MovieList films={['https://api.example.com/movies/1', 'https://api.example.com/movies/2']} />);
    await waitFor(() => expect(screen.queryAllByRole('listitem')).toHaveLength(2));
    expect(screen.queryAllByRole('listitem')[0]).toHaveTextContent('Movie 1');
    expect(screen.queryAllByRole('listitem')[1]).toHaveTextContent('Movie 2');
  });

  test('displays an error message when there is an error while fetching data from the API', async () => {
    axios.get.mockRejectedValueOnce(new Error('API Error'));
    render(<MovieList films={['https://api.example.com/movies/1']} />);
    await waitFor(() => expect(screen.getByText('API Error')).toBeInTheDocument());
  });
});