import React from "react";
import axios from "axios";
import "./ListUser.scss"
import { withRouter } from "react-router-dom/cjs/react-router-dom";

class ListUser extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        // axios.get("https://reqres.in/api/users?page=1")
        //     .then(res => {
        //         console.log('check res', res.data.data)
        //     })
        let res = await axios.get("https://reqres.in/api/users?page=1")
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })

    }

    henldeViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {
        let { listUsers } = this.state;
        return (
            <>
                <div className="list-user-container">
                    <div className="title-table">
                        Danh sách tất cả các user
                    </div>
                    <div>
                        <table className="list-user-content">
                            <tbody>
                                <tr className="title-stt-user">
                                    <th className="title-stt">STT</th>
                                    <th className="title-user">Người Dùng</th>
                                </tr>
                                {listUsers && listUsers.length > 0 &&
                                    listUsers.map((item, index) => {
                                        return (
                                            <tr className="user-child" key={item.id}

                                                onClick={() => this.henldeViewDetailUser(item)}
                                            >
                                                <td className="user-id" >{index + 1}</td>
                                                <td className="fisrt-last-name" >{item.first_name} {item.last_name}</td>
                                            </tr>
                                        )
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
export default withRouter(ListUser);