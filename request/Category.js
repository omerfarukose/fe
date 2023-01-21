import {myGetRequest} from "./myGetRequest";
import {GET_CATEGORIES} from "../public/strings/url";

export const GetCategoriesRequest = ( ) => {
    return new Promise((resolve, reject) => {
        myGetRequest("Get Categories",GET_CATEGORIES)
            .then(response => resolve(response))
            .catch((error => reject(error)))
    })
}
