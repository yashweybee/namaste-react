import { CDN_URL } from "../utils/constants";


const RestaurentCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resData;

    return (
        <div className="res-card" style={{ backgroundColor: "#F0F0F0" }}>
            <img className="res-img" alt="res-img" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo} </h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.deliveryTime} Mins</h4>
        </div>
    )
}

export default RestaurentCard;