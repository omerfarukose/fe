import Layout from "../../components/main/layout";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../contexts/UserContext";
import { useRouter } from 'next/router'
import { FaRegUser, FaTasks, FaHandMiddleFinger, FaAt } from 'react-icons/fa'
import {Avatar} from "@mui/material";
import Image from "next/image";

export default function Project(){

    const Menus = [
        { title: "Profil", icon: <FaRegUser color={"white"}/>},
        { title: "Projelerim", icon: <FaAt color={"white"}/>},
        { title: "Yapılacaklar", icon: <FaTasks color={"white"}/>},
    ];

    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

    const _renderMenuContent = () => {
        switch (selectedMenuIndex){
            case 0:
                return _renderProfileMenuContent()
            case 1:
                return _renderProjectsMenuContent()
            case 2:
                return _renderTodoListMenuContent()
        }
    }

    const _renderProfileMenuContent = () => {
        return(
            <div className={`flex flex-col w-full`}>

                {/* user avatar & name-uni */}
                <div className={`bg-blue-one-color flex w-full text-black rounded-md p-5 drop-shadow-md mb-8 items-center`}>

                    {/* user avatar */}
                    <div className={`mr-8`}>
                        <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="/static/images/user2.jpg" />
                    </div>

                    {/* user name-uni */}
                    <div>

                        <div className={`text-2xl text-gray-100`}>
                            Ömer Faruk KÖSE
                        </div>

                        <div className={`text-xl text-white`}>
                            Pamukkale Üniversitesi - Bilgisayar Mühendisliği
                        </div>

                    </div>

                </div>

                <div className={`bg-gray-200 bg-opacity-60 flex w-full h-96 text-black rounded-md p-3 drop-shadow-md`}>
                    Profile Menu
                </div>
            </div>
        )
    }

    const _renderProjectsMenuContent = () => {
        return(
            <div className={`bg-gray-200 bg-opacity-60 flex w-full h-96 text-black rounded-md p-3 drop-shadow-md`}>
                Projects
            </div>
        )
    }

    const _renderTodoListMenuContent = () => {
        return(
            <div className={`bg-gray-200 bg-opacity-60 flex w-full h-96 text-black rounded-md p-3 drop-shadow-md`}>
                Todo List
            </div>
        )
    }

    return(
        <Layout sidebar={false}>
            <div
                className={`
                    flex 
                    w-full 
                    h-full 
                    p-8
                `}>

                {/* menu list */}
                <div className={`mr-8`}>

                    {Menus.map((Menu, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedMenuIndex(index)}
                            className={`
                                ${selectedMenuIndex === index ? `border-2 border-white` :`border-0`} 
                                flex p-3 mb-8 w-64 h-16 items-center bg-blue-one-color
                                rounded-md drop-shadow-md cursor-pointer drop-shadow-2xl
                            `}>

                            <div className={`mr-2`}>
                                {Menu.icon}
                            </div>

                            <div className={`text-white text-xl`}>

                                {Menu.title}

                            </div>

                        </div>
                    ))}

                </div>

                {/* menu content */}
                <div
                    className={`
                        flex
                        w-full 
                        h-96
                    `}>

                    { _renderMenuContent() }

                </div>

            </div>

        </Layout>
    )
}
