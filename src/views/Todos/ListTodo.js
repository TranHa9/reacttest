import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making video' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Wow so easy!");
    }

    henldeDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete success!");
    }

    henldeEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];
            //Find index of specific object using findIndex method.    
            let objIndex = listTodosCopy.findIndex((item => item.id == todo.id));

            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo success!");
            return;
        }


        //Edit
        this.setState({
            editTodo: todo
        })

    }


    henldeOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        //let listTodos = this.state.listTodos
        //console.log('check', listTodos)
        let isEmptyObj = Object.keys(editTodo).length === 0 //Check biến isEmptyObj true, false
        return (
            <>
                <p>
                    TODO APP
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <table className="list-todo-content">
                        <tbody>
                            {listTodos && listTodos.length > 0 &&
                                listTodos.map((item, index) => {
                                    return (
                                        <tr className="todo-child" key={item.id}>
                                            {isEmptyObj === true ?
                                                <td className="listtodo"> {index + 1} - {item.title}</td>
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        <td className="input">
                                                            {index + 1}- <input
                                                                value={editTodo.title}
                                                                onChange={(event) => this.henldeOnchangeEditTodo(event)}
                                                            />
                                                        </td>
                                                        :
                                                        <td className="listtodo"> {index + 1} - {item.title}</td>
                                                    }
                                                </>
                                            }
                                            <td className="edit-delete">
                                                <button className="edit"
                                                    onClick={() => this.henldeEditTodo(item)}>
                                                    {isEmptyObj === false && editTodo.id === item.id ?
                                                        'Save' : 'Edit'
                                                    }
                                                </button>
                                                <button className="delete"
                                                    onClick={() => this.henldeDeleteTodo(item)}
                                                >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
//npm install --save-exact react-router-dom@5.3.0
export default ListTodo;