import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App  from './App';
import '@testing-library/jest-dom/vitest';

describe("App Component Test", () => {
    it('App renders', () => {
        render(<App />);
        const appElement = screen.getByText(/useRef/i);  // Look for the raw test useRef in the document
        expect(appElement).toBeInTheDocument();
    });

    it('Finds input field', () => {
        render(<App />);
        const inputElement = screen.getByRole("textbox"); // Find the input textbox
        expect(inputElement).toBeInTheDocument();
    });

    it('Input value is Initial....', () => {
        render(<App />);
        const inputElement = screen.getByRole("textbox"); // Find the input textbox
        expect(inputElement.value).toBe("Initial value..."); // Check the value in the text box
    });

    it('Changes input value', () => {
        render(<App />);
        const button = screen.getByText("Replace text"); // Find the button
        
        fireEvent.click(button);
        const element = screen.getByDisplayValue(/Some other/);
        console.log(element);
        expect(element).toBeInTheDocument();
    });
})