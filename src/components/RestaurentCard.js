import { CDN_URL } from "../utils/constants";


const RestaurentCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resData;

    return (
        <div className="m-2 p-3 w-[250px] bg-gray-100 rounded hover:scale-[0.98] transition">
            <img className="rounded" alt="res-img" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo} </h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} Mins</h4>
        </div>
    )
}


// Higher oerder Component

export const nonvegRestaurent = (RestaurentCard) => {
    return (props) => {
        return (
            <div className="hover:scale-[0.98] transition">
                <label className="absolute bg-red-600 text-white rounded-lg p-2 z-10">Non-veg</label>
                <RestaurentCard {...props} />
            </div>
        )
    }

}

export default RestaurentCard;