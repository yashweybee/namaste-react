import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const loggedInUser = useContext(UserContext);


    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    return (
        <div className="flex justify-between shadow-lg">
            <div className="logo-container ">
                <img className="w-44" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-5">  <Link to="/"> Home</Link> </li>
                    <li className="px-5">
                        <Link to="/about"> About Us</Link>
                    </li>
                    <li className="px-5">  <Link to="/contact">Contact Us</Link> </li>
                    <li className="px-5">  <Link to="/grocery">Grocery</Link> </li>
                    <li className="px-5"><Link to="/cart"> Cart ({cartItems.length})</Link> </li>
                    <button className="px-5" onClick={() => { btnName === "Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button>
                    <li className="font-bold"> {loggedInUser.loggedInUser}</li>
                    <li className="px-5"> {onlineStatus ? "🟢" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;