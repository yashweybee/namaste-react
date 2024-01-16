import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 10
        }

        console.log(this.props.name + "child const");
    }

    componentDidMount() {
        console.log(this.props.name + "Comp did. mount");
    }

    render() {
        const { name, location } = this.props;

        console.log(this.props.name + "child render");

        return (
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })

                }}>inc</button>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>address: @RaviAajugiya</h3>
            </div>
        )
    }
}

export default UserClass;