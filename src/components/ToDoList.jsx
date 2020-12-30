import React, { useState } from 'react';
import './ToDoList.css';
import ListElement from './ListElement';

export const ToDoList = ({ todoList, reload }) => {

    const [ selectedType, setSelectedType ] = useState("All"); 

    const getListElement = (type) => {
        if (type === "Active") {
            return renderList("Active");
        } else if (type === "Completed") {
            return renderList("Completed");
        } else {
            return renderList("All");
        }
    }

    const renderList = (type) => {
        var listItems = '';
        switch (type) {
            case "Active": {
                listItems = todoList.map((todo) => {
                    if (todo.isActive) {
                        return (
                            <ListElement item={todo} key={todo._id} reload={reload}/>
                        )
                    }
                });
                break;
            }
            case "Completed": {
                listItems = todoList.map((todo) => {
                    if (!todo.isActive) {
                        return (
                            <ListElement item={todo} key={todo._id} reload={reload}/>
                        )
                    }
                });
                break;
            }
            default: {
                listItems = todoList.map((todo) => {
                    return (
                        <ListElement item={todo} key={todo._id} reload={reload}/>
                    )
                });
            }
        }
        return listItems;
    }

    return (
        <div>
            <div className="functionBox">
                <div>
                    <button onClick={() => setSelectedType("All")}>All</button>
                </div>
                <div>
                    <button onClick={() => setSelectedType("Active")}>Active</button>
                </div>
                <div>
                    <button onClick={() => setSelectedType("Completed")}>Completed</button>
                </div>
            </div>
            <div className="listBox">
                {getListElement(selectedType)}
            </div>
        </div>
    )
}

export default ToDoList;
