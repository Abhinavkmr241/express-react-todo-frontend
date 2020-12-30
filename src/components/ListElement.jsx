import React from 'react';
import './ListElement.css';
import { updateToDo, deleteToDo } from '../http/http-calls';

export const ListElement = ({ item, reload }) => {

    const markItem = (checked) => {
        if (checked) {
            let todoData = {
                isActive: false
            };
            updateToDo(todoData, item._id).then((resp) => {
                console.log("updated todo response here :- ", resp);
                reload();
            }).catch((err) => {
                console.log(err);
            });
        } else {
            let todoData = {
                isActive: true
            };
            updateToDo(todoData, item._id).then((resp) => {
                console.log("updated todo response here :- ", resp);
                reload();
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    const deleteItem = () => {
        deleteToDo(item._id).then((resp) => {
            console.log("delete todo response here :- ", resp);
            reload();
        }).catch((err) => {
            console.log(err);
        });
    }

    const editText = (value) => {
        if (!!value.trim().length) {
            let todoData = {
                message: value
            };
            updateToDo(todoData, item._id).then((resp) => {
                console.log("updated todo response here :- ", resp);
                reload();
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <div className={(item.isActive) ? 'element' : 'markElement' }>
            <input type='checkbox' id={item._id}
                onClick={(e) => markItem(e.target.checked)}
                checked={!item.isActive}
            />
            <input type="text" className="inputBox" value={item.message}
                onChange={(e) => editText(e.target.value)}
                disabled={!item.isActive} />
            <button className="deleteButton" onClick={deleteItem}><strong>X</strong></button>
        </div>
    )
}

export default ListElement
