import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { useState } from "react";

const RestaurentMenu = () => {

    // for toggling between categories
    const [showIndex, setShowIndex] = useState(0);

    const { resId } = useParams();

    // custom hook-- feching data fom api
    const resInfo = useRestaurentMenu(resId);

    if (resInfo == null) return <Shimmer />

    const { name, cuisines, costForTwoMessage, avgRatingString } = resInfo?.cards[0]?.card?.card?.info;
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        .filter(c => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div >
            <div className=" text-center">
                <h1 className="font-bold mt-8 text-3xl">{name}</h1>
                <h3 className="font-semibold my-5 text-xl">{cuisines.join(", ")}</h3>
                <h3 className="p-2 bg-yellow-500 inline rounded">{costForTwoMessage}</h3>
                <h4 className="p-2 mx-3 bg-green-500 inline rounded">{avgRatingString} stars</h4>
            </div>

            {categories.map((category, index) => (
                <RestaurentCategory
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => {
                        showIndex !== index ?
                            setShowIndex(index) : setShowIndex(null)
                    }}
                    key={category?.card?.card?.title}
                    data={category}
                />
            ))}


        </div>
    )
}

export default RestaurentMenu;