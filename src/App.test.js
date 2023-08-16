import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const danceElement = screen.getByText(/dance/i);
  expect(danceElement).toBeInTheDocument();
});
