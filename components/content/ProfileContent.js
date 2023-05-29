import React, {useState} from "react";
import {BackButton} from "../ui/BackButton";
import {Avatar} from "@mui/material";
import {BiImageAdd} from "react-icons/bi";
import {FiEdit3} from "react-icons/fi";

export default function ProfileContent (props) {

    const [name, setName] = useState("okose181");
    const [university, setUniversity] = useState("Pamukkale University");
    const [department, setDepartment] = useState("Computer Science");

    const _renderInputItem = ( value, setValue ) => {
        return(
            <div className={"flex justify-center w-3/5 mb-4 items-center"}>

                <input
                    type={"1"}
                    id={"1"}
                    value={value}
                    spellCheck={false}
                    autoComplete={"off"}
                    onChange={ e => setValue(e.target.value)}
                    className="bg-test-second-gray rounded rounded-tr-none rounded-br-none flex-1 p-2 px-4 text-test-white placeholder-test-gray"
                    required/>

                <div className={"flex items-center w-14 justify-center h-full bg-test-second-gray"}>

                    <FiEdit3 color={"#ffffff"} size={20}/>

                </div>

            </div>

        )
    }

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Profile"}/>

            <div className={"p-8 flex flex-col items-center justify-center"}>

                {/*user image*/}
                <div className={"flex flex-col items-center justify-center"}>

                    <div className={"mb-4 border border-2 border-white rounded-full"}>
                        <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src="/static/images/user2.jpg" />
                    </div>

                    <BiImageAdd color={"#ffffff"} size={30}/>

                </div>

                {/*user info*/}
                <div className={"p-8 w-3/5 flex flex-col items-center"}>

                    <div className={"bg-test-second-gray rounded rounded-tl-none rounded-bl-none w-3/5 p-2 px-4 mb-3 text-test-white placeholder-test-gray"}>
                        okose181
                    </div>

                    <div className={"bg-test-second-gray rounded w-3/5 p-2 px-4 mb-3 text-test-white placeholder-test-gray"}>
                        Pamukkale University
                    </div>

                    { _renderInputItem(department, setDepartment)}
                </div>

                {/*info cards*/}
                <div className={"flex w-full justify-evenly items-center"}>

                    {/*projects*/}
                    <div className={"w-28 bg-test-second-gray h-1/5 h-32 flex flex-col items-center justify-evenly rounded cursor-pointer"}>

                        <p className={"text-3xl font-bold"}>
                            3
                        </p>

                        <p className={"text-medium font-bold"}>
                            Projects
                        </p>
                    </div>

                    {/*tasks*/}
                    <div className={"w-28 bg-test-second-gray h-1/5 h-32 flex flex-col items-center justify-evenly rounded cursor-pointer"}>

                        <p className={"text-3xl font-bold"}>
                            6
                        </p>

                        <p className={"text-medium font-bold"}>
                            Tasks
                        </p>
                    </div>

                    {/*tasks*/}
                    <div className={"w-28 bg-test-second-gray h-1/5 h-32 flex flex-col items-center justify-evenly rounded cursor-pointer"}>

                        <p className={"text-3xl font-bold"}>
                            4
                        </p>

                        <p className={"text-medium font-bold"}>
                            Invites
                        </p>
                    </div>

                </div>


            </div>


        </div>
    )
}
