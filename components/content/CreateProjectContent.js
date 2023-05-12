import React, {useState} from "react";
import {BackButton} from "../ui/BackButton";

export default function CreateProjectContent (props) {

    const [projectName, setProjectName] = useState("");
    const [projectDescription, setProjectDescription] = useState("");

    const _renderInputItem = ( title, value, setValue ) => {
        return(
            <div className={"px-8 py-4"}>

                <p className={"mb-2 font-medium"}>
                    { title }
                </p>

                <input
                    type={"1"}
                    id={"1"}
                    value={value}
                    spellCheck={false}
                    onChange={ e => setValue(e.target.value)}
                    className="bg-test-white text-test-gray text-sm rounded-sm w-full p-2.5"
                    required/>

            </div>
        )
    }

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Create Project"}/>

            <div className={"font-bold text-2xl p-8 pt-2"}>
                Create project.
            </div>

            { _renderInputItem("Project name", projectName, setProjectName)}

            { _renderInputItem("Project description", projectDescription, setProjectDescription)}

            <div className={"flex justify-center mt-8"}>

                <div className={"bg-green-600 p-2 rounded text-test-gray font-medium"}>
                    Create
                </div>

            </div>

        </div>
    )
}
