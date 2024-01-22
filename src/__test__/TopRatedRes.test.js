import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom"
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resApiMockData.json"
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test('should render top Rated restaurents', async () => {
    await act(() =>
        render(<BrowserRouter>
            <Body />
        </BrowserRouter>))

    const allResttaurents = screen.getAllByTestId("resCard");

    // console.log(allResttaurents.length);
    expect(allResttaurents.length).toBe(20)

    const topRatedResBtn = screen.getByRole("button", { name: "Top Rated" });
    // console.log(topRatedResBtn);
    fireEvent.click(topRatedResBtn);

    const allResttaurentsAfterClick = screen.getAllByTestId("resCard");
    // console.log(allResttaurentsAfterClick.length);
    expect(allResttaurentsAfterClick.length).toBe(1);
});
