import React from "react";
import UserInfor from "./Userinfor";

class DisplayInfor extends React.Component {


    render() {

        const { listuser } = this.props;
        console.log(listuser)
        return (
            <div>
                {listuser.map((item) => {
                    console.log(item)
                    return (
                        <div key={item.id}>
                            <div> My name {item.name}</div>
                            <div> Age {item.age}</div>
                            <hr />
                        </div>
                    )
                })}
                {/* <div> My name {name}</div>
                <div> Age {age} </div>
                <hr />
                <div> My name {name}</div>
                <div> Age {age} </div>
                <hr />
                <div> My name {name}</div>
                <div> Age {age} </div> */}
                {/* <div> My name {this.props.name}</div>
                <div> Age {this.props.age} </div> */}
            </div>
        )
    }

}

export default DisplayInfor;