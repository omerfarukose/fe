import axios from "axios";
import {BASE_URL} from "../../../../public/static/strings/url";

export const myPutRequest = (requestName, url, requestData ) => {
    let requestURL = BASE_URL + url;

    console.log("Request URL : ", requestURL)
    console.log("Request Data : ", requestData)

    return new Promise((resolve, reject) => {
        axios.put(requestURL, requestData)
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
