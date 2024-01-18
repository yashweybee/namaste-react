import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurentMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const jsonData = await data.json();
        // console.log(jsonData?.data);
        setResInfo(jsonData?.data);
    }


    return resInfo;
}


export default useRestaurentMenu;