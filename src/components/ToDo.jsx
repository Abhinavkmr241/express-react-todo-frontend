import React, { Component } from 'react';
import './ToDo.css';
import ToDoList from './ToDoList';
import { todoList, addToDo, updateToDo } from '../http/http-calls';

class ToDo extends Component {

    state = {
        message: '',
        toDoList: []
    }

    componentDidMount() {
        this.getToDoList();
    }

    getToDoList = () => {
        todoList().then((resp) => {
            this.setState({
                toDoList: resp.todos
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    
    handleInput = (value) => {
        if (!!value.trim().length) {
            this.setState({
                message: value
            });
        }
    }

    addITem = (e) => {
        e.preventDefault();
        let todoData = {
            message: this.state.message,
            isActive: true
        };
        addToDo(todoData).then((resp) => {
            console.log(resp);
            this.setState({ message: '' });
            this.getToDoList();
        }).catch((err) => {
            console.log(err);
        });
    }

    markAll = (checked) => {
        if (checked) {
            this.state.toDoList.map((todo) => {
                let todoData = {
                    isActive: false
                };
                updateToDo(todoData, todo._id).then((resp) => {
                    console.log(resp);
                    this.getToDoList();
                }).catch((err) => {
                    console.log(err)
                });
            });
        } else {
            this.state.toDoList.map((todo) => {
                let todoData = {
                    isActive: true
                };
                updateToDo(todoData, todo._id).then((resp) => {
                    console.log(resp);
                    this.getToDoList();
                }).catch((err) => {
                    console.log(err)
                });
            });
        }
    }

    render() {
        return (
            <div className="background">
                <h1><strong>To Do</strong></h1>
                <div className="todoBody">
                    <form onSubmit= {this.addITem}>
                        <input type="text" placeholder="Enter what to do...?!"
                            className="inputText"
                            value={this.state.message}
                            onChange= {(e) => this.handleInput(e.target.value)} 
                        />
                        <button type="submit" className="addButton" ><strong>Add</strong></button>
                    </form>
                    <input type="checkbox" id="markAll" onClick={(e) => this.markAll(e.target.checked)} />
                    <label><strong>Mark All</strong></label>
                    <ToDoList todoList={this.state.toDoList}
                        reload={() => this.getToDoList()}
                    />
                </div>
            </div>
        )
    }
}

export default ToDo;
