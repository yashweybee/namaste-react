import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {

    console.log(items);
    return (
        <div className="pl-4">
            {items.map((item) => (
                <div className="my-10 pb-2 border-b-2 flex justify-between" key={item?.card?.info?.id}>
                    <div className="mb-2 ">
                        <span className="font-semibold text-lg">{item?.card?.info?.name}</span>
                        <span className="text-lg"> - &#8377; {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
                        <p className="mb-2">{item?.card?.info?.description}</p>
                    </div>
                    <div className="flex flex-col relative">
                        {!CDN_URL + item?.card?.info?.imageId ?
                            (<img className="w-48 rounded" src={CDN_URL + item?.card?.info?.imageId} alt="food-img" />) : (<span></span>)
                        }
                        <button className=" border text-green-500 rounded-md px-5 p-2 m-auto hover:shadow-md">Add +</button>
                    </div>
                </div>


            ))}
        </div>
    )


}

export default ItemList