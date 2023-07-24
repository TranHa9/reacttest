import React, { Component } from "react";
import { withRouter } from "react-router";
import Color from "./HOC/Color";

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 5000)//sau 5s sẽ tự động chuyển sang trang todo
    // }
    render() {
        return (
            <div>
                Hello world Hà
            </div>
        )
    }
}
// export default withRouter(Home);
export default Color(Home);