import React from "react";

class AddComponent extends React.Component {
    state = {
        titleJob: "",
        salary: "",
    }
    hendleOnChangeTitleJob = (event) => {
        this.setState({
            titleJob: event.target.value
        })
    }
    hendleOnChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    hendleSubmit = (event) => {
        event.preventDefault()//preventDefault() ngăn chặn loat lại trang web
        if (!this.state.titleJob || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log('check submit', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 11),
            title: this.state.titleJob,
            salary: this.state.salary
        })
        this.setState({
            titleJob: "",
            salary: ""
        })
    }
    render() {
        return (
            <form>
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text"
                    value={this.state.titleJob}
                    onChange={(event) => this.hendleOnChangeTitleJob(event)}
                />
                <br />
                <label htmlFor="lname">Salary:</label><br />
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.hendleOnChangeSalary(event)}
                />
                <br /><br />
                <input type="submit"
                    onClick={(event) => this.hendleSubmit(event)}
                />
            </form>
        )
    }
}
export default AddComponent;