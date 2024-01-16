import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent const")
    }

    componentDidMount() {
        console.log("parent com. did mount");
    }

    render() {
        console.log("Parent Render");

        return (
            <div>
                <h1>About Us</h1>
                <h3>Our Team:</h3>
                {/* <User name={"Yash Parmar"} location={"Rajkot"} /> */}
                <UserClass name={"Yash Parmar"} location={"Rajkot"} />
                <UserClass name={"Ravi Aajugiya"} location={"Vadodara"} />
            </div>
        )
    }
}

/**
 * parnt const
 * parent rend
 * parent did...
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

// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h3>Our Team:</h3>
//             <User name={"Yash Parmar"} location={"Rajkot"} />
//             <UserClass name={"Ravi Aajugiya"} location={"Vadodara"} />
//         </div>
//     )
// }

export default About;