import { render, screen } from '@testing-library/react';
import App from './App';

test('Napis `Strona główna` jest na stronie.', () => {
  render(<App />);
  const textElement = screen.getByText("Strona główna");
  expect(textElement).toBeInTheDocument();
});

