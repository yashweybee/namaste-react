import { render, screen } from "@testing-library/react"
import RestaurentCard from "../components/RestaurentCard";
import MOCK_DATA from '../mocks/resCardMock.json';
import "@testing-library/jest-dom";


test('should render restaurent card with prop data', () => {

    render(<RestaurentCard resData={MOCK_DATA} />)

    const resName = screen.getByText("The Grand Thakar - TGT");
    expect(resName).toBeInTheDocument();

})
