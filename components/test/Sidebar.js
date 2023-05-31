import React, {useContext, useEffect, useState} from "react";
import {SidebarButton} from "../ui/SidebarButton";
import {LayoutContext} from "../../contexts/LayoutContext";
import {AiFillFolderAdd} from "react-icons/ai";
import {FiLogIn} from "react-icons/fi";
import Link from "next/link";

export const Sidebar = ( ) => {

    let { setContentType } = useContext(LayoutContext);

    return(
        <div className={"w-1/6"}>

            {/*main buttons*/}
            <div className={"bg-test-gray h-fit p-3 rounded-md justify-center mb-3"}>

                <SidebarButton title={"Anasayfa"} type={0}/>
                {/*<SidebarButton title={"Profile"} type={3}/>*/}
                <SidebarButton title={"Üniversiteler"} type={5}/>
                <SidebarButton title={"Projelerim"} type={2}/>

            </div>

            {/* projects */}
            <div
                onClick={() => setContentType(6)}
                className={"flex bg-test-gray p-3 h-fit rounded-md items-center text-test-white cursor-pointer font-bold mb-3"}>

                <AiFillFolderAdd color={"#b3b3b3"} size={20}/>

                {/*title*/}
                <p className={"ml-2"}>
                    Proje Oluştur
                </p>

            </div>

            {/*logout button*/}
            <Link
                className={"flex bg-test-gray p-3 h-fit rounded-md items-center text-test-white cursor-pointer font-bold mb-3"}
                href={"/"}>

                <FiLogIn color={"#b3b3b3"} size={20}/>

                <p className={"ml-2"}>

                    Çıkış

                </p>

            </Link>


        </div>
    )
}
