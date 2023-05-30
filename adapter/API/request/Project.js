import {myGetRequest} from "./main/myGetRequest";
import {
    APPROVE_MEMBER, BASE_URL,
    CREATE_PROJECT,
    GET_PROJECT_MEMBER, GET_PROJECT_TASK_LIST, GET_UNIVERSITY_PROJECT_LIST,
    GET_USER_DATA, GET_USER_PROJECT_LIST,
    SET_PROJECT_MEMBER
} from "../../../public/static/strings/url";
import {GET_PROJECT} from "../../../public/static/strings/url";
import {GET_POPULAR_PROJECT} from "../../../public/static/strings/url";
import {myPostRequest} from "./main/myPostRequest";
import {myPutRequest} from "./main/myPutRequest";

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

export const GetProjectDataRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Get Project",GET_PROJECT, requestData)
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

export const GetProjectTaskListRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Get Project Task List Request", "/projects/"+requestData?.id+"/todos", requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const CompleteTaskRequest = ( data ) => {
    let requestData = {
        description: data?.description,
        is_done: data?.isDone
    }

    return new Promise((resolve, reject) => {
        myPutRequest("Complete Task Request Request", "/projects/"+data?.id+"/todos/"+data?.todoId, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const GetUniversityProjectListRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Get University Project List Request", GET_UNIVERSITY_PROJECT_LIST, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}

export const GetUserProjectListRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myPostRequest("Get User Project List Request", GET_USER_PROJECT_LIST, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}


