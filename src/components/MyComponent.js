//Class component
// function component

import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./Display";

class MyComponent extends React.Component {

    state = {
        listuser: [
            { id: 1, name: "nammm", age: "25" },
            { id: 2, name: "adadad", age: "33" },
            { id: 3, name: "nammafafafm", age: "44" }
        ]
    }

    // JSX
    render() {
        return (
            <div>
                <UserInfor></UserInfor>
                <DisplayInfor
                    listuser={this.state.listuser}
                    user={this.state.listuser}

                >
                </DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;