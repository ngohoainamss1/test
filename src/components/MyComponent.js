//Class component
// function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        address: 'Toi la ai',
        age: 26
    };

    handleClick = (event) => {
        console.log(">> cliack me buuton")
        console.log("My name is", this.state.name)

        this.setState({
            name: "Nam"
        })
    }

    handleMouseOver() {
        console.log("hi hi hi")
    }

    thaydoiinput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert("name")
    }


    // JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and i'am from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>Click me</button>

                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text"
                        onChange={(event) => this.thaydoiinput(event)}></input>
                    <button> SUbmit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;