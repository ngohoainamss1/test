//Class component
// function component

import React from "react";
import UserInfor from "./Userinfor";
import DisplayInfor from "./Display";

class MyComponent extends React.Component {

    // JSX
    render() {
        return (

            <div>
                <UserInfor></UserInfor>
                <DisplayInfor></DisplayInfor>
            </div>
        );
    }
}

export default MyComponent;