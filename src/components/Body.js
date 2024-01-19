import RestaurentCard, { nonvegRestaurent } from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

let actualData = [];

const Body = () => {
    const isOnline = useOnlineStatus();

    const [listOfRestaurent, setlistOfRestaurent] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const { setUserName, loggedInUser } = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();

        actualData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // console.log(actualData);
        setlistOfRestaurent(actualData);
        setFilteredRes(actualData);
    }

    const NonVegRestaurent = nonvegRestaurent(RestaurentCard);

    if (isOnline === false) return <h1>Please check your internet connection. Your are offline!!</h1>

    if (filteredRes.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="">
            <div className="flex items-center justify-center m-6">
                <div className="m-4">
                    <input
                        type="text"
                        className="border border-slate-300 rounded-md px-3 py-2"
                        value={searchText} onChange={
                            (e) => {
                                setSearchText(e.target.value);
                            }}></input>

                    <button className="bg-orange-400 rounded px-4 py-2 mx-2"
                        onClick={() => {
                            const filteredList = listOfRestaurent.filter((res) => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
                            setFilteredRes(filteredList);
                        }} > Search</button>

                </div>
                <div>
                    <button className="rounded-xl bg-orange-400 px-4 py-2 mx-2" onClick={() => {
                        const filteredList = listOfRestaurent.filter(res => res?.info?.avgRating > 4.5);
                        setFilteredRes(filteredList);

                    }}>Top Rated</button>
                    <button className="rounded-xl bg-orange-400 px-4 py-2 mx-2" onClick={() => {

                        setFilteredRes(listOfRestaurent);

                    }}>All Restaurent</button>
                </div>
                <div>
                    <label>User Name</label>
                    <input
                        type="text"
                        className="border border-slate-300 rounded-md px-3 py-2"
                        value={loggedInUser} onChange={
                            (e) => {
                                setUserName(e.target.value);
                            }}></input>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mx-24" >
                {
                    filteredRes.map((restaurant) => (
                        <Link to={"/restaurents/" + restaurant.info.id} key={restaurant.info.id}>
                            {!restaurant.info.veg ? (<NonVegRestaurent resData={restaurant.info} />) : (<RestaurentCard resData={restaurant.info} />)}
                        </Link>
                    ))
                }

            </div>
        </div >
    )
}

export default Body;