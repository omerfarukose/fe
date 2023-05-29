import React, {useState} from "react";
import {BackButton} from "../ui/BackButton";
import {Avatar} from "@mui/material";
import {TbSchool} from "react-icons/tb";
import {BsFillHeartFill} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";

export default function UniversityDetailContent (props) {

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"University"}/>

            <div className={"p-6 flex"}>

                <div className={"w-48 bg-test-second-gray h-48 flex flex-col items-center justify-evenly rounded cursor-pointer hover:bg-test-third-gray"}>

                    <div className={"border border-2 border-white rounded-full"}>
                        <Avatar sx={{ width: 120, height: 120 }} alt="Remy Sharp" src={"/static/uni-logo/pau-logo.png"} />
                    </div>

                </div>

                <div className={"px-6 flex flex-col justify-end"}>

                    <p className={"flex flex-1 items-center font-bold text-4xl"}>
                        Pamukkale University
                    </p>

                    <div className={"flex items-center font-medium text-xl text-test-white"}>

                        <AiOutlineUser color={"#b3b3b3"} size={18}/>

                        <p className={"ml-1 mr-8"}>
                            123 Student
                        </p>

                        <BsFillHeartFill color={"#ef233c"} size={18}/>

                        <p className={"ml-1"}>
                            13 Project
                        </p>

                    </div>

                </div>

            </div>




        </div>
    )
}
