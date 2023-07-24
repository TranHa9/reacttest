import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
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
        firstname: "",
        lastname: "",
        arrJob: [
            { id: 'job1', title: 'Developer', salary: '1000' },
            { id: 'job2', title: 'Tester', salary: '800' },
            { id: 'job3', title: 'Project managers', salary: '900' }
        ]
    }


    addNewJob = (jobnew) => {
        console.log('Check', jobnew)
        // let currenJobs = this.state.arrJob;
        // currenJobs.push(jobnew)
        this.setState({
            arrJob: [...this.state.arrJob, jobnew]// Sử dụng kiểu rút gọn này: [] tạo 1 arr mới, ... là copy lại các phần tử của arrJob, jobnew là đẩy thêm các phần tử vào
            // arrJob: currenJobs
        })

    }
    DeleteAJob = (job) => {
        let currenJobs = this.state.arrJob;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJob: currenJobs
        })
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('run didupdate', 'prev State:', prevState, 'current state', this.state)
    }
    componentDidMount() {
        console.log("run component did mount")
    }
    render() {
        console.log('call render:', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
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
                <ChildComponent name={'Child one'}
                    age={'6'}
                    address={"Hà Nội"}
                    DeleteAJob={this.DeleteAJob}
                    job={this.state.arrJob}
                />
            </>
        )
    }
}

export default MyComponent;