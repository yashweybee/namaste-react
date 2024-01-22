import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resApiMockData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})



test('should render res cards and search pizza in textbox', async () => {

    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    // console.log(cardsBeforeSearch.length);
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const inpBox = screen.getByTestId("searchInputBox");

    fireEvent.change(inpBox, { target: { value: "pizza" } });
    fireEvent.click(searchBtn);

    // console.log(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2);
});
