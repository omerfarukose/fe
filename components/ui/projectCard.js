import { Avatar, AvatarGroup } from "@mui/material";
import {GiGreekTemple} from 'react-icons/gi'
import {BiUser} from 'react-icons/bi'
import {BiTime} from 'react-icons/bi'
import Link from "next/link";

export const ProjectCard = () => {

    const roleList = [ "front-end", "back-end", "designer", "tester", "ömer", "kemal" ];

    const _renderRoleItem = (title) => {
        return(
            <div className="bg-white text-main-color rounded-lg text-medium flex justify-center items-center">
                {title}
            </div>
        )
    }

    return(
        <Link href="/project/projectDetail" className="flex flex-row border border-gray-200 rounded-lg border-4 m-4 text-gray-700 h-96 cursor-pointer">

            {/* left view */}
            <div className="p-8 w-4/6 flex flex-col">

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
                <div className={"text-sm flex flex-1 items-center"}>
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
            <div className="bg-main-color w-2/6 py-8 rounded-tr-lg rounded-br-lg text-white flex flex-col items-center justify-between">

                {/* title */}
                <div >
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

                {/* team info */}
                <div className="flex flex-col justify-center items-center align-bottom">

                    <div className="mb-2">
                        Proje Ekibi
                    </div>

                    <AvatarGroup max={4}>

                        <Avatar alt="ömer" sx={{ width: 35, height: 35 }} src="/static/images/user2.jpg"/>
                        <Avatar alt="ömer" sx={{ width: 35, height: 35 }} src="/static/images/user2.jpg"/>
                        <Avatar alt="ömer" sx={{ width: 35, height: 35 }} src="/static/images/user2.jpg"/>
                        <Avatar alt="ömer" sx={{ width: 35, height: 35 }} src="/static/images/user2.jpg"/>
                        <Avatar alt="ömer" sx={{ width: 35, height: 35 }} src="/static/images/user2.jpg"/>

                    </AvatarGroup>

                </div>

            </div>

        </Link>
    )

}
