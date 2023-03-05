import Link from 'next/link'
import { useEffect, useRef, useState, useContext } from "react";
import { IoMdLogIn } from 'react-icons/io'
import { CgHomeAlt } from 'react-icons/cg'
import { HiOutlineSearch } from 'react-icons/hi'
import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import IconButton from "../ui/iconButton";

export default function Navbar(props) {

    const router = useRouter()

    let { navbarItems } = props

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
        <div className={`fixed w-full h-[50px] bg-main-color flex items-center justify-between z-10`}>

            {/* button group view */}
            <div className={"flex flex-1 pl-2"}>

                {/* home button */}
                <IconButton tooltip={"Home"} href={"/"} icon={<CgHomeAlt size={22}/>}/>

                {/* search bar */}
                <div className={'flex bg-opacity-40 bg-gray-200 mr-2 w-80 items-center justify-end p-2 rounded-sm cursor-pointer'}>
                    <Tooltip title="Home">
                        <HiOutlineSearch size={22}/>
                    </Tooltip>
                </div>

            </div>

            {/* logo */}
            <div className={"flex flex-1 items-center justify-center w-full absolute -z-10 align-middle opacity-50 cursor-pointer"}>
                <Link href={"/"}>
                    <p className={"text-xl font-bold"}>
                        unipo.
                    </p>
                </Link>
            </div>

            {/* logout button */}
            <div className={'flex flex-1 items-center justify-end'} onClick={() => {handleLogout()}}>
                <IconButton tooltip={"Log OutIn"} icon={<IoMdLogIn size={22}/>}/>
            </div>

        </div>
    )
}
