import React, {useContext, useState} from "react";
import {BackButton} from "../ui/BackButton";
import {CreateProjectRequest, SetProjectMemberRequest} from "../../adapter/API/request/Project";
import {UserContext} from "../../contexts/UserContext";
import {Snackbar} from "@mui/material";
import {LayoutContext} from "../../contexts/LayoutContext";

export default function CreateProjectContent (props) {

    let { userId, userUniversityId } = useContext(UserContext);
    let { setContentType } = useContext(LayoutContext);

    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);

    function _handleCreateProject(){
        let requestData = {
            owner: userId,
            name: projectName,
            description: projectDescription,
            university_id: userUniversityId,
        }

        if (userId && projectName && projectDescription && userUniversityId) {

            CreateProjectRequest(requestData)
                .then((response) => {
                    console.log("project created !")

                    let requestData = {
                        user_id: userId,
                        project_id: response?.data?.id,
                    }

                    SetProjectMemberRequest(requestData)
                        .then(() => {
                            console.log("User added to member list !")
                            setShowSnackbar(true)

                            let delayInMilliseconds = 2000; //1 second

                            setTimeout(function() {
                                //your code to be executed after 1 second
                                setContentType(0)
                            }, delayInMilliseconds);
                        })
                })
        } else {
            console.log("invalid requestData : ", requestData)
        }


    }

    const _renderInputItem = ( title, value, setValue ) => {
        return(
            <div className={"px-8 py-4 mb-8"}>

                <p className={"mb-2 font-medium"}>
                    { title }
                </p>

                <input
                    type={"1"}
                    id={"1"}
                    value={value}
                    autoComplete={"off"}
                    spellCheck={false}
                    onChange={ e => setValue(e.target.value)}
                    className="bg-test-white text-test-gray text-sm rounded-sm w-full p-2.5"
                    required/>

            </div>
        )
    }

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Proje Oluştur"}/>

            <div
                className={"mt-20"}>

                { _renderInputItem("Proje İsmi", projectName, setProjectName)}

                { _renderInputItem("Proje Açıklaması", projectDescription, setProjectDescription)}

            </div>


            <div className={"flex justify-center mt-10"}>

                <div
                    onClick={() => _handleCreateProject()}
                    className={"cursor-pointer bg-green-600 p-2 rounded text-test-gray font-medium"}>

                    Oluştur

                </div>

            </div>

            <Snackbar
                open={showSnackbar}
                autoHideDuration={6000}
                onClose={() => setShowSnackbar(false)}
                message={"Proje Oluşturuldu !"}/>

        </div>
    )
}
