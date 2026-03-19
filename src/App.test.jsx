import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import SceneVisual from './components/SceneVisual';

describe('App', () => {
  it('vykreslí úvodní scénu gamebooku', () => {
    render(<App />);

    expect(screen.getByText('Kouzelnická akademie')).toBeInTheDocument();
    expect(screen.getByText('1. Slunečné nádvoří')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /jít prozkoumat prázdnou klec/i })).toBeInTheDocument();
  });

  it('zobrazí čistý cover obrázek, pokud ho scéna má', () => {
    render(<SceneVisual imageSrc="https://example.com/scene.jpg" imageAlt="Testovací scéna" />);

    expect(screen.getByRole('img', { name: 'Testovací scéna' })).toBeInTheDocument();
    expect(screen.queryByText('PŘÍBĚH')).not.toBeInTheDocument();
  });
});
