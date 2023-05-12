import { Avatar, AvatarGroup } from "@mui/material";
import {GiGreekTemple} from 'react-icons/gi'
import {BiUser} from 'react-icons/bi'
import {BiTime} from 'react-icons/bi'
import Link from "next/link";
import {LayoutContext} from "../../contexts/LayoutContext";
import {useContext} from "react";

export const TestCard = ( props ) => {

    const roleList = [ "front-end", "back-end", "designer", "tester", "ömer", "kemal" ];

    let { setContentType } = useContext(LayoutContext);

    const _renderRoleItem = (title) => {
        return(
            <div className="bg-test-white text-second-color rounded text-medium flex justify-center items-center">
                {title}
            </div>
        )
    }

    return(
        <div
            onClick={() => setContentType(1)}
            className="flex flex-row bg-test-gray w-full h-fit p-2 rounded-md mb-2 cursor-pointer">

            {/* left view */}
            <div className="p-8 w-4/6 flex flex-col rounded">

                {/* title */}
                <div>

                    {/* project name */}
                    <div className={"text-lg font-bold"}>
                        Project Name
                    </div>

                    {/* owner university */}
                    <div className={"flex items-center"}>

                        <BiTime size={15}/>

                        <div className={"ml-2 text-medium"}>
                            1 week ago
                        </div>

                    </div>

                </div>

                {/* project detail */}
                <div className={"text-sm flex flex-1 items-center my-5"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
                </div>

                {/* owner info */}
                <div className={"text-medium"}>

                    {/* owner name */}
                    <div className={"flex"}>

                        <BiUser size={15}/>

                        <div className={"ml-2"}>
                            Ömer Faruk KÖSE
                        </div>

                    </div>

                    {/* owner university */}
                    <div className={"flex"}>

                        <GiGreekTemple size={15}/>

                        <div className={"ml-2"}>
                            PAMUKKALE UNIVERSITY
                        </div>

                    </div>

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

                    <div className="grid grid-cols-2 p-4 gap-2 w-full">

                        {
                            roleList.map((role) => (
                                _renderRoleItem(role)
                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    )

}
