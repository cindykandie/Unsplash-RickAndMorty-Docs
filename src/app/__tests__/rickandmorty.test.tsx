import { render, screen, waitFor } from '@testing-library/react';
import RickAndMorty from '../rickandmorty/page';
import '@testing-library/jest-dom';

jest.mock('../api/rickandmorty', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve([
    {
      id: '1',
      name: 'Rick Sanchez',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      status: 'Alive',
    },
  ])),
}));

describe('RickAndMorty', () => {
  it('renders Rick and Morty characters', async () => {
    render(<RickAndMorty />);
    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });
  });

  it('renders search input and filter select', () => {
    render(<RickAndMorty />);
    expect(screen.getByPlaceholderText('Search by name')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
    expect(screen.getByText('Dead')).toBeInTheDocument();
    expect(screen.getByText('Unknown')).toBeInTheDocument();
  });
});
