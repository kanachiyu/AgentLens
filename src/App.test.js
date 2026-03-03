// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AgentLens title', () => {
    render(<App />);
    const titleElement = screen.getByText(/AgentLens/i);
    expect(titleElement).toBeInTheDocument();
});
