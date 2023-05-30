import React, {useContext, useEffect, useState} from "react";
import {SidebarButton} from "../ui/SidebarButton";
import {LayoutContext} from "../../contexts/LayoutContext";
import {MdAddCircle} from "react-icons/md";
import {FiLogIn} from "react-icons/fi";
import Link from "next/link";
import {GetProjectDataRequest} from "../../adapter/API/request/Project";
import {UserContext} from "../../contexts/UserContext";

export const Sidebar = ( ) => {

    let { setContentType } = useContext(LayoutContext);


    return(
        <div className={"w-1/6"}>

            {/*main buttons*/}
            <div className={"bg-test-gray h-fit p-3 rounded-md justify-center mb-3"}>

                <SidebarButton title={"Home"} type={0}/>
                <SidebarButton title={"Profile"} type={3}/>
                {/*<SidebarButton title={"Messages"} type={4}/>*/}
                <SidebarButton title={"Search"} type={5}/>
                <SidebarButton title={"Projelerim"} type={2}/>

            </div>

            {/* projects */}
            <div className={"bg-test-gray h-fit p-3 rounded-md text-test-white justify-center font-bold mb-3"}>

                {/*title*/}
                <div className={"flex flex-row mb-4 justify-between"}>

                    <p> Projects </p>

                    <div
                        onClick={() => setContentType(6)}>
                        <MdAddCircle color={"#b3b3b3"} size={20}/>

                    </div>

                </div>

            </div>

            {/*logout button*/}
            <Link
                className={"flex bg-test-gray p-3 h-fit rounded-md items-center text-test-white cursor-pointer font-bold mb-3"}
                href={"/"}>

                <FiLogIn color={"#b3b3b3"} size={20}/>

                <p className={"ml-2"}>

                    Logout

                </p>

            </Link>


        </div>
    )
}
