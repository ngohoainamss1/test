//Class component
// function component

import React from "react";
import AddUserInfor from "./AddUserinfor";
import DisplayInfor from "./Display";

class MyComponent extends React.Component {

    state = {
        listuser: [
            { id: 1, name: "nammm", age: "25" },
            { id: 2, name: "adadad", age: "33" },
            { id: 3, name: "nammafafafm", age: "44" }
        ]
    }

    handleAddUser = (userObject) => {
        console.log("check: ", userObject)

        // let listuserclone = this.state.listuser;
        // listuserclone.unshift(userObject)
        // this.setState({
        //     listuser: listuserclone
        // })

        this.setState({
            listuser: [userObject, ...this.state.listuser]
        })
    }

    xoa = (userId) => {
        let listuserclone = [...this, this.state.listuser]
    }

    // JSX
    render() {
        return (
            <>
                <div className="a">
                    <AddUserInfor
                        handleAddUser={this.handleAddUser}
                    ></AddUserInfor>
                    <DisplayInfor
                        listuser={this.state.listuser}
                        user={this.state.listuser}
                    >
                    </DisplayInfor>
                </div>

                <div className="b">

                </div>
            </>

        );
    }
}

export default MyComponent;