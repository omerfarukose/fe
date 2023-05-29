import {myPostRequest} from "./main/myPostRequest";
import {LOG_OUT_URL, SIGN_IN_URL, SIGN_UP_URL} from "../../../public/static/strings/url";

export const SignUpRequest = (userData ) => {
    let requestData = {
        username: userData.username,
        password: userData.password,
    }

    return new Promise((resolve, reject) => {
        myPostRequest("Sign In", SIGN_UP_URL, requestData)
            .then(response => resolve(response))
            .catch((error => reject(error)))
    })
}

export const SignInRequest = ( data ) => {
    let requestData = {
        username: data.username,
        password: data.password,
    }

    return new Promise((resolve, reject) => {
        myPostRequest("Sig In",SIGN_IN_URL, requestData)
            .then(response =>  resolve(response))
            .catch((error => reject(error)))
    })
}

export const LogOutRequest = ( userData ) => {
    let requestData = {
        token: userData.token,
    }

    return new Promise((resolve, reject) => {
        myPostRequest("Log Out",LOG_OUT_URL, requestData)
            .then(response =>  resolve(response))
            .catch((error => reject(error)))
    })
}
