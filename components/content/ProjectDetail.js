import {BackButton} from "../ui/BackButton";
import React from "react";
import {RiEditLine} from "react-icons/ri";
import {Avatar} from "@mui/material";

export default function ProjectDetail (props) {

    const _renderParticipantItem = ( ) => {
        return(
            <div className={"flex w-10/12 items-center rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                <div className={"mr-2"}>
                    <Avatar alt="ömer" sx={{ width: 50, height: 50 }} src="/static/images/user2.jpg"/>
                </div>

                <div>
                    <p className={"text-medium"}>Ömer Faruk Köse</p>
                    <p className={"text-sm"}>Pamukkale University</p>
                </div>

            </div>
        )
    }

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Project Detail"}/>

            {/*header*/}
            <div className={"p-6 flex"}>

                <div className={"font-bold text-5xl p-8 pt-2 h-48 w-48 bg-gray-800 rounded-sm flex justify-center items-center"}>
                    P
                </div>

                <div className={"px-6 flex flex-col justify-end"}>

                    <div className={"flex flex-1 items-center font-bold text-4xl"}>
                        <p className={"mr-6"}>
                            Sample Project Name
                        </p>

                        <RiEditLine size={30}/>
                    </div>

                    <div className={"font-medium text-xl"}>
                        Pamukkale University
                    </div>

                    <div className={"font-medium text-medium"}>
                        Created at 2 week ago by sample user
                    </div>

                </div>

            </div>

            <div className={"flex flex-row w-full p-6"}>

                {/*left side*/}
                <div className={"w-1/4 items-start"}>

                    <p className={"text-medium font-bold text-test-white p-2"}>
                        Participants
                    </p>

                    {/*sample participant*/}
                    { _renderParticipantItem() }
                    { _renderParticipantItem() }
                    { _renderParticipantItem() }

                </div>

                {/*right side*/}
                <div className={"w-3/4 ml-2"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
                </div>

            </div>


        </div>
    )
}
