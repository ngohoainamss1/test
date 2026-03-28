import React from "react";
import UserInfor from "./Userinfor";

class DisplayInfor extends React.Component {
    state = {
        isShow: true
    }
    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {

        const { listuser } = this.props;
        console.log(listuser)
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShow === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShow &&
                    <div>
                        {listuser.map((item) => {
                            console.log(item)
                            return (
                                <div key={item.id} className={+item.age > 30 ? "green" : "red"}>
                                    <div> My name {item.name}</div>
                                    <div> Age {item.age}</div>
                                    <hr />
                                </div>
                            )





                            // if (+item.age > 30) {
                            //     return (
                            //         <div key={item.id} className="red">
                            //             <div> My name {item.name}</div>
                            //             <div> Age {item.age}</div>
                            //             <hr />
                            //         </div>
                            //     )
                            // }
                            // else {
                            //     return (
                            //         <div key={item.id} className="green">
                            //             <div> My name {item.name}</div>
                            //             <div> Age {item.age}</div>
                            //             <hr />
                            //         </div>
                            //     )
                            // }
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
                }
            </div>
        )
    }

}

export default DisplayInfor;