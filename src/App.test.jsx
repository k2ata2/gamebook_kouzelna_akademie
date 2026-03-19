import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('vykreslí úvodní scénu gamebooku', () => {
    render(<App />);

    expect(screen.getByText('Kouzelnická akademie')).toBeInTheDocument();
    expect(screen.getByText('1. Slunečné nádvoří')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jít prozkoumat prázdnou klec/i })).toBeInTheDocument();
  });
});
