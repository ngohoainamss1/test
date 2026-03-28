import React from "react";

class UserInfor extends React.Component {

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
        console.log(this.state)
    }

    thaydoiage = (event) => {
        this.setState({
            age: event.target.value
        })
        console.log(this.state)
    }


    handleSubmit = (event) => {
        event.preventDefault();
        alert("name")
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and i'am from {this.state.age}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleMouseOver}>Click me</button>

                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Your name</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.thaydoiinput(event)}></input>
                    <button> SUbmit</button>

                    <label>Your age</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.thaydoiage(event)}></input>
                    <button> SUbmit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;