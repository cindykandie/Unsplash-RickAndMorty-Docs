import { render, screen } from '@testing-library/react';
import NavBar from '../components/NavBar';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('renders navigation links', () => {
    render(<NavBar />);
    expect(screen.getByText('Unsplash Photos')).toBeInTheDocument();
    expect(screen.getByText('Rick & Morty Characters')).toBeInTheDocument();
    expect(screen.getByText('Unsplash API Docs')).toBeInTheDocument();
    expect(screen.getByText('Rick & Morty API Docs')).toBeInTheDocument();
  });
});
