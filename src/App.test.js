import { render, screen } from '@testing-library/react';
import App from './App.js';


beforeEach(() => {
    window.history.pushState({}, 'Test', '/tiae24-frontend');
});


test('renders navigation links', () => {
    render(<App />);

    const mainLinks = screen.getByText(/All Posts/i);

    expect(mainLinks).toBeInTheDocument();
    expect(mainLinks).toHaveAttribute('href', '/tiae24-frontend');

    const createLinks = screen.getByText(/Create Post/i);

    expect(createLinks).toBeInTheDocument();
    expect(createLinks).toHaveAttribute('href', '/tiae24-frontend/create');
});



