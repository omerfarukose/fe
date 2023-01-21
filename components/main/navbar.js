import Link from 'next/link'
import { useEffect, useRef, useState } from "react";
import { IoMdLogIn } from 'react-icons/io'
import { CgHomeAlt } from 'react-icons/cg'
import { BiMessageSquareDots } from 'react-icons/bi'
import { HiOutlineSearch } from 'react-icons/hi'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import { IoNotificationsOutline } from 'react-icons/io5'
import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import IconButton from "../ui/iconButton";
import { LogOutRequest } from "../../adapter/API/request/Auth";

export default function Navbar(props) {

    let { navbarItems } = props

    const router = useRouter()

    const userData = useRef();
    const userInfo = useRef();

    const [userName, setUserName] = useState("test");

    useEffect(() => {

        // userData.current = JSON.parse(localStorage.getItem("userData"));
        // userInfo.current = JSON.parse(localStorage.getItem("userInfo"));
        //
        // let infoMail = userInfo.current?.email
        //
        // let myUserName = infoMail?.substr(0, infoMail.indexOf('@'));
        //
        // setUserName(myUserName)
    }, []);

    function handleLogout(){
        // let requestData = {
        //     token: userData.current?.access_token,
        // }
        //
        // LogOutRequest(requestData);

        localStorage.setItem("isLogin", false)
        localStorage.setItem("userData",null)
        localStorage.setItem("userInfo",null)

        router.push("/login")
    }

    return(
        <div className={'fixed w-full h-12 bg-gradient-to-r from-orange-500 to-red-400 flex items-center justify-between z-10 px-8'}>

            {
                navbarItems &&
                <div className={"flex flex-1"}>

                    <IconButton tooltip={"Projects"} href={"/projects"} icon={<BsGrid3X3GapFill size={22}/>}/>

                    <IconButton tooltip={"Home"} href={"/"} icon={<CgHomeAlt size={22}/>}/>

                    {/* search bar */}
                    <div className={'flex bg-opacity-40 bg-gray-200 mr-2 w-80 items-center justify-end p-2 rounded-sm cursor-pointer'}>
                        <Tooltip title="Home">
                            <HiOutlineSearch size={22}/>
                        </Tooltip>
                    </div>
                </div>
            }

            <div className={"flex flex-1 items-center justify-center w-full absolute -z-10 align-middle opacity-50 cursor-pointer"}>
                <Link href={"/"}>
                    <p className={"text-xl font-bold"}>
                        unipo.
                    </p>
                </Link>
            </div>

            {
                navbarItems && userName &&

                    <div className={'flex flex-1 items-center justify-end'}>

                        <IconButton tooltip={"Yeni Proje"} href={"/user/createProject"} icon={<AiOutlinePlus size={22}/>}/>

                        <IconButton tooltip={"Bildirmler"} href={"/projects"} icon={<IoNotificationsOutline size={22}/>}/>

                        <IconButton tooltip={"Mesajlar"} href={"/projects"} icon={<BiMessageSquareDots size={22}/>}/>

                        {
                            userName &&

                            <div className={"mx-3"}>
                                {userName}
                            </div>
                        }

                        <IconButton tooltip={"Profil"} href={"/user/profile"} icon={<AiOutlineUser size={22}/>}/>

                        <div onClick={() => {
                            handleLogout()
                        }}>
                            <IconButton tooltip={"Log OutIn"} icon={<IoMdLogIn size={22}/>}/>
                        </div>

                    </div>

            }

            {
                navbarItems && !userName &&

                    <div className={'basis-2/4 flex items-center justify-end'}>
                        <div className={'bg-white items-center justify-center p-2 px-5 rounded-md cursor-pointer'}>
                            <Link href="/login">
                                <p className={'text-tartOrange text-sm text-center'}> Kayıt/Giriş </p>
                            </Link>
                        </div>
                    </div>

            }

        </div>
    )
}
