import config from '../config';
import { makePostRequest, makeGetRequest, makePutRequest, makeDeleteRequest } from './http-service';
const BASE_URL = config.BASE_URL;

export const todoList = () => {
    return new Promise((resolve, reject) => {
        makeGetRequest(
            BASE_URL + "/todos"
        )
            .then(res => {
                resolve(res);
            })
            .catch(e => {
                console.log("API call error: ", e);
                reject(e);
            });
    });
};

export const addToDo = (todoData) => {
    return new Promise((resolve, reject) => {
        makePostRequest(
            BASE_URL + "/todo",
            todoData
        )
            .then(res => {
                resolve(res);
            })
            .catch(e => {
                console.log("API call error: ", e);
                reject(e);
            });
    });
}

export const updateToDo = (todoData, id) => {
    return new Promise((resolve, reject) => {
        makePutRequest(
            BASE_URL + `/todo/${id}`,
            todoData
        )
            .then(res => {
                resolve(res);
            })
            .catch(e => {
                console.log("API call error: ", e);
                reject(e);
            });
    });
}

export const deleteToDo = (id) => {
    return new Promise((resolve, reject) => {
        makeDeleteRequest(
            BASE_URL + `/todo/${id}`
        )
            .then(res => {
                resolve(res);
            })
            .catch(e => {
                console.log("API call error: ", e);
                reject(e);
            });
    });
}