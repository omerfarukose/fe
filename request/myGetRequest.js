import axios from "axios";
import {BASE_URL} from "../public/strings/url";

export const myGetRequest = ( requestName, url ) => {
    let requestURL = BASE_URL + url;

    console.log("request url : ",requestURL)

    return new Promise((resolve, reject) => {
        axios.get(requestURL)
            .then(response => {
                console.log(requestName," Response : ",response)
                resolve(response)
            })
            .catch((error => {
                console.log(requestName," Error : ",error)
                reject(error)
            }))
    })
}
