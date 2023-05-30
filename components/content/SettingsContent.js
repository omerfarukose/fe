import React, {useContext, useEffect, useState} from "react";
import {BackButton} from "../ui/BackButton";
import {TestCard} from "../ui/testCard";
import {UserContext} from "../../contexts/UserContext";
import {GetProjectDataRequest} from "../../adapter/API/request/Project";

export default function SettingsContent (props) {

    let { userProjects } = useContext(UserContext);

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        getProjectData()
    }, []);

    function getProjectData(){
        console.log("sidebar getProjectData !")
        if (userProjects.length > 0) {
            userProjects.map((item) => {
                let requestData = {
                    id: item?.project_id
                }

                GetProjectDataRequest(requestData)
                    .then((response) => {
                        setProjectList(oldArray => [...oldArray, response?.data]);
                    })
            })
        }
    }

    return(
        <div className="flex flex-1 flex-col w-full mx-3 mb-3 rounded">

            <BackButton title={"Settings"}/>

            <div className={"flex flex-1 flex-col px-3 overflow-scroll h-screen"}>

                {
                    projectList.map((data, index) => (
                        <TestCard key={index} projectData={data}/>
                    ))
                }

            </div>

        </div>
    )
}
