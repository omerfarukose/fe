import {myGetRequest} from "./main/myGetRequest";
import {
    APPROVE_MEMBER,
    CREATE_PROJECT,
    GET_PROJECT_MEMBER,
    GET_USER_DATA,
    SET_PROJECT_MEMBER
} from "../../../public/static/strings/url";
import {GET_PROJECT} from "../../../public/static/strings/url";
import {GET_POPULAR_PROJECT} from "../../../public/static/strings/url";
import {myPostRequest} from "./main/myPostRequest";

export const GetAllProjects = ( ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Get Popular Projects", GET_POPULAR_PROJECT)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const CreateProjectRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Create Project", CREATE_PROJECT, requestData)
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

export const SetProjectMemberRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Set Project Member", SET_PROJECT_MEMBER, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const GetUserDataRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Get User Data", GET_USER_DATA, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const GetMemberListRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Get Member List", GET_PROJECT_MEMBER, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const ApproveMemberRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Approve Member Request", APPROVE_MEMBER, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}


