import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const dispatcher = useDispatch();

    const handleClearCart = () => {
        dispatcher(clearCart());
    }


    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="mt-10 w-6/12 mx-auto">
            <h1 className="text-center font-bold text-3xl my-10">Cart</h1>
            <button className="bg-orange-400 rounded px-4 py-2 mx-2" onClick={handleClearCart}>Clear Cart</button>
            <ItemList items={cartItems} />
        </div>
    )
}

export default Cart;