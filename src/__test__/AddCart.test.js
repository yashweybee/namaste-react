import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import RestaurentMenu from "../components/RestaurentMenu";
import Header from "../components/Header"
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenuApi.json"
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test('should load restaurent menu component', async () => {
    await act(() =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurentMenu />
                </Provider>
            </BrowserRouter>
        )
    );

    const accourdianHeader = screen.getByText("Fried Rice & Noodles (7)");
    fireEvent.click(accourdianHeader);

    const resMenuItem = screen.getAllByTestId("resMenu-item");
    expect(resMenuItem.length).toBe(7);

    const allAddBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(allAddBtns[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();

    fireEvent.click(allAddBtns[1]);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();



})

test('should load restaurent menu component', async () => {
    await act(() =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    );

    const cardItems = screen.getAllByTestId("resMenu-item");
    expect(cardItems.length).toBe(2);
    console.log(cardItems.length);

    const clearCardBtn = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCardBtn);

    expect(screen.getByText("Cart is empty!! Please enter some items")).toBeInTheDocument();


})
