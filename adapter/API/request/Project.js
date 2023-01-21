import {myGetRequest} from "./main/myGetRequest";
import {CREATE_PROJECT} from "../../../public/static/strings/url";

export const CreateProjectRequest = ( requestData ) => {
    return new Promise((resolve, reject) => {
        myGetRequest("Create Project",CREATE_PROJECT, requestData)
            .then(response => {
                resolve(response)
            })
            .catch((error => reject(error)))
    })
}
