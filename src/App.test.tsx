import React from 'react';
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders the 404 page for unknown routes', () => {
  window.history.pushState({}, '', '/no-such-page');
  render(<App />);
  expect(screen.getByText('Error 404')).toBeInTheDocument();
  expect(screen.getByTitle('Go Home')).toHaveAttribute('href', '/');
});
