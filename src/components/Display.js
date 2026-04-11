import React from "react";
import './Display.scss'
import UserInfor from "./Userinfor";

import logo from './../logo.svg';

class DisplayInfor extends React.Component {

    constructor(props) {
        console.log('>>> call constructor: 1')
        super(props);
        this.state = {
            isShow: true
        }
    }



    componentDidMount() {
        console.log('>>> call me component')
        setTimeout(() => {
            document.title = "Nam"
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call update: 0', this.props, prevProps)
    }

    handleShowHide = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        console.log('>>> call me render')
        const { listuser } = this.props;
        console.log(listuser)
        return (
            <div className="display_container">
                <img src={logo} alt="" />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShow === true ? "Hide list user" : "Show list user"}
                    </span>
                </div>
                {this.state.isShow &&
                    <>
                        {listuser.map((item) => {
                            console.log(item)
                            return (
                                <div key={item.id} className={+item.age > 30 ? "green" : "red"}>
                                    <div> My name {item.name}</div>
                                    <div> Age {item.age}</div>

                                    <button>Delete</button>

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
                    </>
                }
            </div>
        )
    }

}

export default DisplayInfor;