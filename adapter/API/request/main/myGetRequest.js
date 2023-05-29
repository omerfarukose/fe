import axios from "axios";
import {BASE_URL} from "../../../../public/static/strings/url";

export const myGetRequest = ( requestName, url ) => {
    let requestURL = BASE_URL + url;

    console.log(requestName," Request url : ", requestURL)

    return new Promise((resolve, reject) => {
        axios.get('https://2368-85-98-225-95.ngrok-free.app/all_projects')
            .then(response => {
                console.log(requestName," Response : ", response)
                resolve(response)
            })
            .catch((error => {
                console.log(requestName," Error : ", error)
                reject(error)
            }))
    })
}
