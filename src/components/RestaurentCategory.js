import { useState } from "react";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {

    const handleAccordionClick = () => {
        setShowIndex();
    }

    return (
        <div className="mt-5 w-6/12 mx-auto  bg-gray-100 rounded">
            <div className="my-3 p-4 flex justify-between shadow-md cursor-pointer" onClick={handleAccordionClick}>
                <span className="font-bold">{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList items={data?.card?.card?.itemCards} />}

        </div>
    )

}

export default RestaurentCategory;