import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurentMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);

        const jsonData = await data.json();

        setResInfo(jsonData?.data);

    }
    if (resInfo == null) return <Shimmer />


    const { name, cuisines, costForTwoMessage, avgRatingString } = resInfo?.cards[0]?.card?.card?.info;
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h4>{avgRatingString} stars</h4>

            <h2>Menu:</h2>

            <ul>
                {itemCards.map((item) =>
                    <li
                        key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"Rs. "}  {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                    </li>
                )}

            </ul>

        </div>
    )
}

export default RestaurentMenu;