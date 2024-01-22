import { render, screen } from "@testing-library/react"
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe('Contact Us page test cases', () => {

    // beforeAll(() => {
    //     console.log("before all");
    // })

    // beforeEach(() => {
    //     console.log("before each");
    // })

    // afterAll(() => {
    //     console.log("after all");
    // })

    // afterEach(() => {
    //     console.log("after each");
    // })



    test('should load contect component', () => {

        render(<Contact />);

        const btn = screen.getByRole("button");

        expect(btn).toBeInTheDocument();

    })

    test('should load input component - name', () => {
        render(<Contact />);
        const inp = screen.getByPlaceholderText('name');
        expect(inp).toBeInTheDocument();
    })

    test('should load input component - email', () => {
        render(<Contact />);
        const inpEmail = screen.getByPlaceholderText('email');
        expect(inpEmail).toBeInTheDocument();
    })

    //it and test both are same
    it('should load 2 textBox input in contact component', () => {
        render(<Contact />);
        const inpBoxes = screen.getAllByRole("textbox");
        expect(inpBoxes.length).toBe(2);
    })
})



