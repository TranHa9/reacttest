import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    henldeOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    henldeOnClickAddNewTodo = () => {
        if (!this.state.title) {
            toast.error('missing title')
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 11),
            title: this.state.title
        }
        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            < div className="add-todo" >
                <input type="text" value={title}
                    onChange={(event) => this.henldeOnChangeTitle(event)}
                />
                <button type="button" className="add"
                    onClick={() => this.henldeOnClickAddNewTodo()}
                >Add</button>
            </div >
        )
    }

}
//npm install --save-exact react-toastify@8.0.2
export default AddTodo;