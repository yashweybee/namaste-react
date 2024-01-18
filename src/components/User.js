import { useEffect, useState } from "react";

const User = ({ name, location }) => {
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("useEffect - User");
    //     }, 1000)

    //     return () =>{
    //         clearInterval(timer);
    //     }

    // }, []);

    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>address: @yashparmar</h3>
        </div>
    )
}
export default User;