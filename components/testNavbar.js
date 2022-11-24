import Link from 'next/link'
import {UserContext} from "../contexts/UserContext";
import {useContext, useEffect, useState} from "react";
import { FaUserCircle, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'
import {IoIosAddCircleOutline, IoIosInformationCircleOutline} from 'react-icons/io'
import { CgHomeAlt } from 'react-icons/cg'
import { HiOutlineSearch } from 'react-icons/hi'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { RiUser6Line } from 'react-icons/ri'
import { IoNotificationsOutline } from 'react-icons/io5'
import {Badge, Tooltip} from "@mui/material";
import {useRouter} from "next/router";
import {LogOutRequest} from "../request/RequestList";

export default function Navbar() {

    const router = useRouter()

    const [userName, setUserName] = useState("");

    let { isLogin, userData, userInfo, setUserInfoData, setIsLogin } = useContext(UserContext);

    let myUserData = localStorage.getItem("userData")

    useEffect(() => {
        console.log("Navbar my user data : ",myUserData)

        if(myUserData){
            setIsLogin(true)
        }
    }, []);

    useEffect(() => {
        let email = userInfo?.email;
        console.log("email: ",email)
        let myusername = email?.substr(0, email.indexOf('@'));
        setUserName(myusername)

        console.log("myusername : ",myusername)
    },[userInfo])

    function handleLogout(){
        let requestData = {
            token: userData?.data?.access_token,
        }

        LogOutRequest(requestData);

        setIsLogin(false)
        setUserInfoData(null)

        localStorage.setItem("isLogin", false)
        localStorage.setItem("userData",null)

        router.push("/login")
    }

    return(
        <div className={'fixed w-full h-12 bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-between z-10 px-8'}>

            <div className={"flex flex-1"}>
                <div className={'bg-opacity-40 bg-gray-200 mr-2 items-center justify-center p-2 aspect-square rounded-sm cursor-pointer'}>
                    <Tooltip title="Menu">
                        <BsGrid3X3GapFill size={22}/>
                    </Tooltip>
                </div>

                <div className={'bg-opacity-40 bg-gray-200 mr-2 items-center justify-center p-2 aspect-square rounded-sm cursor-pointer'}>
                    <Tooltip title="Home">
                        <CgHomeAlt size={22}/>
                    </Tooltip>
                </div>

                <div className={'flex bg-opacity-40 bg-gray-200 mr-2 w-80 items-center justify-end p-2 rounded-sm cursor-pointer'}>
                    <Tooltip title="Home">
                        <HiOutlineSearch size={22}/>
                    </Tooltip>
                </div>
            </div>

            <div className={"flex flex-1 items-center justify-center opacity-50 cursor-pointer"}>
                <p className={"text-xl font-bold"}>
                    unipo.
                </p>
            </div>

            {/*/!* logo *!/*/}
            {/*<Link className={'basis-1/4 cursor-pointer flex items-center justify-start'} href={"/"}>*/}
            {/*    <p className={'text-white font-sans text-xl'} style={{fontFamily: 'Inter',fontWeight: 500}}>*/}
            {/*        unipo.*/}
            {/*    </p>*/}
            {/*</Link>*/}

            {/*/!* nav items *!/*/}
            {/*<div className={'basis-1/2 flex items-center justify-start pl-5 text-white text-sm'}>*/}

            {/*    <div className={'mr-8'}>*/}
            {/*        <Link href="/projects">Projeler</Link>*/}
            {/*    </div>*/}

            {/*    <div className={'mr-8 '}>*/}
            {/*        <Link href="/projects">Üniversiteler</Link>*/}
            {/*    </div>*/}

            {/*</div>*/}

            {
                isLogin ?

                    <div className={'flex flex-1 items-center justify-end'}>

                        <Tooltip title="Menu">
                            <div className={'bg-opacity-40 bg-gray-200 items-center justify-center p-2 ml-2 aspect-square rounded-sm cursor-pointer'}>
                                <AiOutlinePlus size={22}/>
                            </div>
                        </Tooltip>

                        <Tooltip title="Menu">
                            <div className={'bg-opacity-40 bg-gray-200 items-center justify-center p-2 ml-2 aspect-square rounded-sm cursor-pointer'}>
                                <IoNotificationsOutline size={22}/>
                            </div>
                        </Tooltip>

                        <Tooltip title="Menu">
                            <div className={'bg-opacity-40 bg-gray-200 items-center justify-center p-2 ml-2 aspect-square rounded-sm cursor-pointer'}>
                                <IoIosInformationCircleOutline size={22}/>
                            </div>
                        </Tooltip>

                        <Tooltip title="Profile">
                            <div className={'bg-opacity-40 bg-gray-200 items-center justify-center p-2 ml-8 aspect-square rounded-sm cursor-pointer'}>
                                    <RiUser6Line size={22}/>
                            </div>
                        </Tooltip>






                        {/*<div className={'mr-8 cursor-pointer'}>*/}
                        {/*    <Tooltip title="Mesajlar">*/}
                        {/*        <Badge badgeContent={7} color="info">*/}
                        {/*            <FaEnvelope size={20}/>*/}
                        {/*        </Badge>*/}
                        {/*    </Tooltip>*/}
                        {/*</div>*/}

                        {/*<div className={'mr-8 cursor-pointer'}>*/}
                        {/*    <Tooltip title="Bildirimler">*/}
                        {/*        <Badge badgeContent={3} color="info">*/}
                        {/*            <FaBell size={20}/>*/}
                        {/*        </Badge>*/}
                        {/*    </Tooltip>*/}
                        {/*</div>*/}


                        {/*<Tooltip title="Profil">*/}
                        {/*    <Link href="/profile" className={'cursor-pointer flex flex-row items-center'}>*/}
                        {/*        {*/}
                        {/*            userName &&*/}
                        {/*            <div className={"mr-2"}>*/}
                        {/*                {userName}*/}
                        {/*            </div>*/}
                        {/*        }*/}
                        {/*        <FaUserCircle size={30}/>*/}
                        {/*    </Link>*/}
                        {/*</Tooltip>*/}

                        {/*<Tooltip title="Proje Oluştur">*/}
                        {/*    <Link href="/newProject">*/}
                        {/*        <div className={'ml-12 cursor-pointer'}>*/}
                        {/*            <IoIosAddCircleOutline size={30}/>*/}
                        {/*        </div>*/}
                        {/*    </Link>*/}
                        {/*</Tooltip>*/}


                        {/*<Tooltip title="Çıkış Yap">*/}
                        {/*    <div onClick={() => handleLogout()} className={'ml-12 cursor-pointer'}>*/}
                        {/*        <FaSignOutAlt size={20}/>*/}
                        {/*    </div>*/}
                        {/*</Tooltip>*/}

                    </div>

                    :

                    <div className={'basis-2/4 flex items-center justify-end'}>
                        <div className={'bg-white items-center justify-center p-2 px-5 rounded-md cursor-pointer'}>
                            <Link href="/login">
                                <p className={'text-main-color font-medium text-sm text-center'}> Kayıt/Giriş  </p>
                            </Link>
                        </div>
                    </div>

            }

        </div>
    )
}
