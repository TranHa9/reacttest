import React from "react";
import './Demo.scss'
class ChildComponent extends React.Component {
    // state = {
    //     name: 'Hà',
    //     age: '23t'
    // }
    /**
     * JSX => Trả về 1 block
     * React.Fragment or <></>: bọc lại nhiều khối giúp code hợp lệ
     */
    // handleOnChangeName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    // hendleClickButton = () => {
    //     alert('Click me')
    // }
    state = {
        showJob: false
    }
    henldeShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    henldeOnClickDelete = (job) => {
        console.log('Check', job)
        this.props.DeleteAJob(job)
    }
    render() {
        // let name = this.props.name;
        // let age = this.props.age;
        let { job } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showJob = true' : 'showJob = false'
        console.log('check', check)

        return (
            <>
                {showJob === false ?
                    <div>
                        <button className="btn-show"
                            onClick={() => this.henldeShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className="job-list">
                            {
                                job.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}&nbsp; <span onClick={() => this.henldeOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.henldeShowHide()}>Hide</button></div>
                    </>}
                {/* <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello Cậu, Mình là {this.state.name}
                </div>
                <div className="second">
                    Mình: {this.state.age}
                </div>
                <div className="third">
                    <button onClick={() => this.hendleClickButton()}>Click me</button>
                </div> */}
            </>
        )
    }
}

// const ChildComponent = (props) => {
//     let { job } = props;
//     return (
//         <>
//             <div className="job-list">
//                 {
//                     job.map((item, index) => {
//                         if (+item.salary >= 900) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;