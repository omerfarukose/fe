import { Avatar, AvatarGroup } from "@mui/material";
import {GiGreekTemple} from 'react-icons/gi'
import {BiUser} from 'react-icons/bi'
import {BiTime} from 'react-icons/bi'
import {LayoutContext} from "../../contexts/LayoutContext";
import {useContext, useEffect, useState} from "react";
import {GetUserDataRequest} from "../../adapter/API/request/Project";

export const TestCard = ( props ) => {

    let { projectData } = props;

    let { setProjectData } = useContext(LayoutContext);
    let { setContentType } = useContext(LayoutContext);

    const [username, setUsername] = useState("");

    useEffect(() => {
        if (projectData?.owner){
            getUserDate(projectData?.owner)
        } else {
            getUserDate(8)
        }
    }, []);

    function formatDate(date){
        const originalTime =  date;
        const formattedTime = new Date(originalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedDate = new Date(originalTime).toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });

        const convertedTime = `${formattedTime} ${formattedDate}`;

        return convertedTime
    }

    function getUserDate(userId){
        let requestData = {
            id: userId
        }

        GetUserDataRequest(requestData)
            .then((response) => {
                setUsername(response?.data?.username)
            })
    }

    return(
        <div
            onClick={() => {
                setProjectData(projectData)
                setContentType(1)
            }}
            className="flex flex-row bg-test-gray w-full p-2 rounded-md mb-2 cursor-pointer">

            {/* left view */}
            <div className="p-8 w-4/6 flex flex-col rounded">

                {/* title */}
                <div>

                    {/* project name */}
                    <div className={"text-2xl font-bold"}>

                        { projectData?.name }

                    </div>

                    {/* created at */}
                    <div className={"flex items-center"}>

                        <BiTime size={15}/>

                        <div className={"ml-2 text-sm"}>
                            {
                                formatDate(projectData?.created_at)
                            }
                        </div>

                    </div>

                </div>

                {/* project description */}
                <div className={"text-sm flex flex-1 items-center my-5"}>

                    { projectData?.description }

                </div>

                {/* owner info */}
                <div className={"text-medium"}>

                    {/* owner name */}
                    <div className={"flex items-center"}>

                        <BiUser size={15}/>

                        <div className={"ml-2"}>
                            { username }
                        </div>

                    </div>


                </div>

            </div>

        </div>
    )

}
