import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

let actualData = [];

const Body = () => {

    const [filteredRes, setFilteredRes] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.3038945&lng=70.80215989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();

        actualData = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setFilteredRes(actualData);
        console.log(actualData);
    }
    if (filteredRes.length === 0) {
        return <Shimmer />
    }

    return (
        <div className=" body">
            <button className="btn filter-btn" onClick={() => {
                const filteredList = filteredRes.filter(res => res?.info?.avgRating > 4.5);
                setFilteredRes(filteredList);

            }}>Top Rated Restaurent</button>

            <div className="res-container" >
                {
                    filteredRes.map((restaurant) => (
                        <RestaurentCard key={restaurant.info.id} resData={restaurant.info} />
                    ))
                }

            </div>
        </div>
    )
}

export default Body;