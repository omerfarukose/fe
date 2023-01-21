import axios from "axios";
import {BASE_URL} from "../public/strings/url";

export const myPostRequest = (requestName, url, requestData ) => {
    let requestURL = BASE_URL + url;

    let env = process.env;

    let data = {
        client_id: env.NEXT_PUBLIC_CLIENT_ID,
        client_secret: env.NEXT_PUBLIC_CLIENT_SECRET,
        ...requestData,
    }

    console.log(requestName, " Request data : ", data)
    console.log(requestName," Request url : ", requestURL)

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
