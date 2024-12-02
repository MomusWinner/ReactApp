import { API_AUTH_PATH, API_PATH } from "../const";
import axios from "axios";

export const getNewsListAction = async function(){
    console.log("news --")
    const apiUrl = API_PATH + '/main';
    let response = await axios.get(apiUrl);
    return await response.data
}

export const getServiceListAction = async function () {
    const apiUrl = API_PATH + '/services';
    let response = await axios.get(apiUrl);
    return response.data
}

export const getServiceAction = async function(id) {
    const url = API_PATH + '/services/' + id
    let response = await axios.get(url)
    return response.data
}

export const signin = async function(user) {
    const url = API_AUTH_PATH + '/login'
    console.log(user)
    let response = await axios.post(url, user, {headers: {'Content-Type': 'application/json'}})
    return response
}