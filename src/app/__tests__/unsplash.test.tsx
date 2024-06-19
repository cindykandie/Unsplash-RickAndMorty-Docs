import { render, screen, waitFor } from '@testing-library/react';
import Unsplash from '../unsplash/page';
import '@testing-library/jest-dom';

jest.mock('../api/unsplash', () => ({
  __esModule: true,
  default: jest.fn(() => Promise.resolve([
    {
      id: '1',
      urls: { small: 'https://images.unsplash.com/photo-1' },
      description: 'A beautiful scene',
    },
  ])),
}));

describe('Unsplash', () => {
  it('renders Unsplash photos', async () => {
    render(<Unsplash />);
    await waitFor(() => {
      expect(screen.getByAltText('A beautiful scene')).toBeInTheDocument();
    });
  });

  it('renders search input', () => {
    render(<Unsplash />);
    expect(screen.getByPlaceholderText('Search photos')).toBeInTheDocument();
  });
});
