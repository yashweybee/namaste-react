import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userData: {}

        }
        // console.log(this.props.name + "child const");
    }

    async componentDidMount() {
        const userData = await fetch('https://api.github.com/users/yash4parmar');
        const jsonData = await userData.json();

        console.log(jsonData);
        this.setState({
            userData: jsonData
        })

        // this.timer = setInterval(() => {
        //     console.log("Com. did mount");

        // }, 1000)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("componentWillUnmount");
    }



    render() {


        const { name, location, avatar_url } = this.state.userData;

        return (
            <div className="user-card">
                <img src={avatar_url} alt="profile pic" />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}

export default UserClass;