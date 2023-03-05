import {myGetRequest} from "./main/myGetRequest";
import {CREATE_PROJECT} from "../../../public/static/strings/url";
import {GET_PROJECT} from "../../../public/static/strings/url";
import {GET_POPULAR_PROJECT} from "../../../public/static/strings/url";

export const GetPopularProjectsRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myGetRequest("Get Popular Projects",GET_POPULAR_PROJECT, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const CreateProjectRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myGetRequest("Create Project",CREATE_PROJECT, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const GetProjectDataRequest = ( projectId ) => {
    let requestData = {
        id: projectId,
    }

    return new Promise((resolve, reject) => {
        myGetRequest("Get Project",GET_PROJECT, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}
