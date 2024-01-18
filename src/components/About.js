import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

// class About extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <div>
//                 <h1>About Us</h1>
//                 <h3>Our Team:</h3>
//                 {/* <UserClass /> */}
//                 <User />

//             </div>
//         )
//     }
// }

/**
 * parnt const
 * parent rend
 * Yash child const
 * yash child render
 * yash did
 * ravi child const
 * ravi child render
 * ravi did
 * parnet did
 * 
 * 
 */

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <h3>Our Team:</h3>
            <User />
            {/* <UserClass name={"Ravi Aajugiya"} location={"Vadodara"} /> */}
        </div>
    )
}

export default About;