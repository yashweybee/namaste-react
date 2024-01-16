import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

let actualData = [];

const Body = () => {
    const [listOfRestaurent, setlistOfRestaurent] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

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
    if (filteredRes.length === 0) {
        return <Shimmer />
    }

    return (
        <div className=" body">
            <div className="filter">
                <div className="search">
                    <input
                        type="text"
                        className="search-Box"
                        value={searchText} onChange={
                            (e) => {
                                setSearchText(e.target.value);
                            }}></input>

                    <button className="btn"
                        onClick={() => {
                            const filteredList = listOfRestaurent.filter((res) => res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
                            setFilteredRes(filteredList);
                        }} > Search</button>


                </div>

                <button className="btn filter-btn" onClick={() => {
                    const filteredList = listOfRestaurent.filter(res => res?.info?.avgRating > 4.5);
                    setFilteredRes(filteredList);

                }}>Top Rated Restaurent</button>
                <button className="btn filter-btn" onClick={() => {

                    setFilteredRes(listOfRestaurent);

                }}>All Restaurent</button>
            </div>

            <div className="res-container" >
                {
                    filteredRes.map((restaurant) => (
                        <Link to={"/restaurents/" + restaurant.info.id} key={restaurant.info.id}>
                            <RestaurentCard resData={restaurant.info} />
                        </Link>
                    ))
                }

            </div>
        </div >
    )
}

export default Body;