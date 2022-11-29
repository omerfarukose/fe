import {myPostRequest} from "./myPostRequest";
import {CREATE_PROJECT, GET_CATEGORIES, LOG_OUT_URL, SIGN_IN_URL, SIGN_UP_URL} from "../public/strings/url";
import {myGetRequest} from "./myGetRequest";

// auth
export const SignUpRequest = ( userData ) => {
    let requestData = {
        email: userData.email,
        password: userData.password,
    }

    console.log("SignUpRequest data : ",requestData)

    return new Promise((resolve, reject) => {
        myPostRequest("Sign In", SIGN_UP_URL, requestData)
            .then(response => resolve(response))
            .catch((error => reject(error)))
    })
}

export const SignInRequest = ( userData ) => {
    let requestData = {
        grant_type: "password",
        email: userData.email,
        password: userData.password,
    }

    console.log(" SignInRequest")

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

// categories
export const GetCategories = ( ) => {
    return new Promise((resolve, reject) => {
        myGetRequest("Get Categories",GET_CATEGORIES)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

// categories
export const CreateProjectRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myGetRequest("Create Project",CREATE_PROJECT, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}
