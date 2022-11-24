import axios from "axios";
import {CLIENT_ID, CLIENT_SECRET} from "../public/strings/client";
import {BASE_URL} from "../public/strings/url";

export const myPostRequest = (requestName, url, requestData ) => {
    let requestURL = BASE_URL + url;

    let data = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        ...requestData,
    }

    console.log(requestName, " Request data : ",requestData)

    return new Promise((resolve, reject) => {
        axios.post(requestURL, data)
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
