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

    const _renderRoleItem = (title) => {
        return(
            <div className="bg-test-white text-second-color rounded text-medium flex justify-center items-center">
                {title}
            </div>
        )
    }

    return(
        <div
            onClick={() => {
                setProjectData(projectData)
                setContentType(1)
            }}
            className="flex flex-row bg-test-gray w-full h-fit p-2 rounded-md mb-2 cursor-pointer">

            {/* left view */}
            <div className="p-8 w-4/6 flex flex-col rounded">

                {/* title */}
                <div>

                    {/* project name */}
                    <div className={"text-lg font-bold"}>
                        { projectData?.name }
                    </div>

                    {/* owner university */}
                    <div className={"flex items-center"}>

                        <BiTime size={15}/>

                        <div className={"ml-2 text-medium"}>
                            {
                                formatDate(projectData?.created_at)
                            }
                        </div>

                    </div>

                </div>

                {/* project detail */}
                <div className={"text-sm flex flex-1 items-center my-5"}>
                    { projectData?.description }
                </div>

                {/* owner info */}
                <div className={"text-medium"}>

                    {/* owner name */}
                    <div className={"flex"}>

                        <BiUser size={15}/>

                        <div className={"ml-2"}>
                            { username }
                        </div>

                    </div>

                    {/*/!* owner university *!/*/}
                    {/*<div className={"flex"}>*/}

                    {/*    <GiGreekTemple size={15}/>*/}

                    {/*    <div className={"ml-2"}>*/}
                    {/*        { projectData?.university }*/}
                    {/*    </div>*/}

                    {/*</div>*/}

                </div>

            </div>

            {/* right view */}
            <div className="w-2/6 py-8 rounded-tr-lg rounded-br-lg text-white flex flex-col items-center justify-between">

                {/* title */}
                <div className={"font-bold"}>
                    Takım Arkadaşı Arayışı
                </div>

                {/* roles */}
                <div className="flex w-full">

                    {/*<div className="grid grid-cols-2 p-4 gap-2 w-full">*/}

                    {/*    {*/}
                    {/*        roles?.map((role) => (*/}
                    {/*            _renderRoleItem(role)*/}
                    {/*        ))*/}
                    {/*    }*/}

                    {/*</div>*/}

                </div>

            </div>

        </div>
    )

}
