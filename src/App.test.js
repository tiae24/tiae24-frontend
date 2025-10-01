import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('renders navigation links', () => {
  render(<App />);
  const mainLinks = screen.getByText(/all posts/i);
  expect(mainLinks).toBeInTheDocument();
  expect(mainLinks).toHaveAttribute('href', '/');

  const createLinks = screen.getByText(/create post/i);
  expect(createLinks).toBeInTheDocument();
  expect(createLinks).toHaveAttribute('href', '/create');
});



