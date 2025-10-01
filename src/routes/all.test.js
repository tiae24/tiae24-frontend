import { render, screen } from '@testing-library/react';
import All from './all.js';

test('renders navigation links', () => {
    render(<All />);
    const allPostsLink = screen.getByText(/Loading the document/i);
    expect(allPostsLink).toBeInTheDocument();

    const container = document.createElement("div");

    console.log(container)


});