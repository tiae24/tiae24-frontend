import { render, screen } from '@testing-library/react';
import Create from './create.js';

test('renders navigation links', () => {
    render(<Create />);

    const allPostsLink = screen.getByText(/Create/i);

    expect(allPostsLink).toBeInTheDocument();

    const button = screen.getByRole('button', { name: /skapa/i });

    expect(button).toBeInTheDocument();
});


test('render Titel label', () => {
    render(<Create />);
    const labelElement = screen.getByText("Titel");

    expect(labelElement).toBeInTheDocument();
});


test('render innehåll label', () => {
    render(<Create />);
    const labelElement = screen.getByText("Innehåll");

    expect(labelElement).toBeInTheDocument();
});

