import Link from 'next/link'
import {UserContext} from "../contexts/UserContext";
import {useContext, useEffect, useState} from "react";
import { FaUserCircle, FaBell, FaEnvelope, FaSignOutAlt } from 'react-icons/fa'
import { CgMenuGridO } from 'react-icons/'
import { IoIosAddCircleOutline } from 'react-icons/io'
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
        console.log("navbar > handleLogout")
        // let requestData = {
        //     token: userData?.data?.access_token,
        // }
        //
        // LogOutRequest(requestData);

        setIsLogin(false)
        setUserInfoData(null)

        localStorage.setItem("isLogin", false)
        localStorage.setItem("userData",null)

        router.push("/login")
    }

    return(
        <div className={'fixed w-full h-16 bg-purple-color flex items-center justify-between z-10 px-40 flex items-center'}>

            {/* logo */}
            <Link className={'basis-1/4 cursor-pointer flex items-center justify-start'} href={"/"}>
                <p className={'text-white font-sans text-xl'} style={{fontFamily: 'Inter',fontWeight: 500}}>
                    unipo.
                </p>
            </Link>

            {/* nav items */}
            <div className={'basis-1/2 flex items-center justify-start pl-5 text-white text-sm'}>

                <div className={'mr-8'}>
                    <Link href="/projects">Projeler</Link>
                </div>

                <div className={'mr-8 '}>
                    <Link href="/projects">Üniversiteler</Link>
                </div>

            </div>

            {
                isLogin ?

                    <div className={'basis-2/4 flex items-center justify-end'}>

                        <div className={'mr-8 cursor-pointer'}>
                            <Tooltip title="Mesajlar">
                                <Badge badgeContent={7} color="info">
                                    <FaEnvelope size={20}/>
                                </Badge>
                            </Tooltip>
                        </div>

                        <div className={'mr-8 cursor-pointer'}>
                            <Tooltip title="Bildirimler">
                                <Badge badgeContent={3} color="info">
                                    <FaBell size={20}/>
                                </Badge>
                            </Tooltip>
                        </div>


                        <Tooltip title="Profil">
                            <Link href="/profile" className={'cursor-pointer flex flex-row items-center'}>
                                {
                                    userName &&
                                    <div className={"mr-2"}>
                                        {userName}
                                    </div>
                                }
                                <FaUserCircle size={30}/>
                            </Link>
                        </Tooltip>

                        <Tooltip title="Proje Oluştur">
                            <Link href="/newProject">
                                <div className={'ml-12 cursor-pointer'}>
                                    <IoIosAddCircleOutline size={30}/>
                                </div>
                            </Link>
                        </Tooltip>


                        <Tooltip title="Çıkış Yap">
                            <div onClick={() => handleLogout()} className={'ml-12 cursor-pointer'}>
                                <FaSignOutAlt size={20}/>
                            </div>
                        </Tooltip>

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
