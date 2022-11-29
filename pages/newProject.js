import Layout from "../components/layout/layout";
import {Avatar, Button, TextField} from "@mui/material";
import React, {useContext, useEffect, useRef, useState} from "react";
import {CreateProject, CreateProjectRequest, SignUpRequest} from "../request/RequestList";
import {UserContext} from "../contexts/UserContext";
import {myStrings} from "../public/strings/string";

export default  function NewProject(){

    const userData = useRef();
    const userInfo = useRef();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [team, setTeam] = useState("");
    const [universityId, setUniversityId] = useState("");
    const [tagId, setTagId] = useState("");
    const [categoryId, setCategoryId] = useState("");

    useEffect(() => {

        userData.current = JSON.parse(localStorage.getItem("userData"));
        userInfo.current = JSON.parse(localStorage.getItem("userInfo"));

        console.log("user info : ",userInfo.current)

    }, []);

    function _createProject(){
        event.preventDefault();

        let projectData = {
            name: name,
            description: description,
            owner_id: userInfo.current?.id,
            team: team,
            university_id: universityId,
            tag_id: tagId,
            category_id: categoryId,
        }

        console.log("Request Data : ",projectData)

        CreateProjectRequest(projectData)
            .then(() => {
                console.log("Project Created !")
                // redirection to my project page
            })
            .catch(() => {})

    }

    const _renderTextField = ( label, value, onChange ) => {
        return(
            <div className={"w-full"}>

                <p>
                    {label}
                </p>

                <input
                    type={"text"}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="bg-gray-300 bg-opacity-40 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required/>
            </div>
        )
    }

    return(
        <Layout>
            <div className={`flex flex-col w-full h-96 p-8  h-screen`}>

                <form onSubmit={_createProject} className={"flex flex-col w-full h-full justify-evenly items-center"}>

                    {_renderTextField("Project name", name, setName)}

                    {_renderTextField("Project Description", description, setDescription)}

                    {_renderTextField("Team List", team, setTeam)}

                    {_renderTextField("University Id", universityId, setUniversityId)}

                    {_renderTextField("TAG Id", tagId, setTagId)}

                    {_renderTextField("Category Id", categoryId, setCategoryId)}

                    <button
                        type="submit"
                        className={'text-white text-sm font-medium text-center px-5 py-2.5 w-56 mx-2 bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-blue-300'}>

                        {myStrings.createProject}

                    </button>

                </form>

            </div>
        </Layout>
    )
}
