import {useContext} from "react";
import {UserContext} from "../contexts/UserContext";

function Sidebar(){
    let { isSidebarOpen, setIsSidebarOpen} = useContext(UserContext);

    const Menus = [
        { title: "Projelerim", src: "Chart_fill" },
        { title: "Yapılacaklar", src: "Chat" },
        { title: "Proje Davetleri", src: "User", gap: true },
        // { title: "Schedule ", src: "Calendar" },
        // { title: "Search", src: "Search" },
        // { title: "Analytics", src: "Chart" },
        // { title: "Files ", src: "Folder", gap: true },
        { title: "Ayarlar", src: "Setting" },
    ];

    return(
        <div className={`${isSidebarOpen ? "w-56" : "w-20 "} fixed flex flex-col top-12 left-0 transition-all border-none z-10 sidebar bg-opacity-20 h-screen p-5 duration-300`}>

            <img
                src="images/control.png"
                className={`${!isSidebarOpen && "rotate-180"} absolute cursor-pointer -right-3 top-7 w-7 border-dark-purple border-2 rounded-full`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>

            {/*<div className="flex gap-x-4 items-center">*/}

            {/*    <img*/}
            {/*        src="images/logo/logo.png"*/}
            {/*        className={`${isSidebarOpen && "rotate-[360deg]"} color-white w-20 cursor-pointer duration-500 bg-white rounded-full border`}/>*/}

            {/*</div>*/}

            <ul className="pt-6">

                {Menus.map((Menu, index) => (
                    <li
                        key={index}
                        className={`
                            ${Menu.gap ? "mt-9" : "mt-2"}
                            ${index === 0 && "bg-light-white"}
                            flex rounded-md p-2 cursor-pointer
                            hover:bg-light-white text-gray-300
                            text-sm items-center gap-x-4`}>

                        <img src={`images/${Menu.src}.png`} />

                        <span className={`${!isSidebarOpen && "hidden"} origin-left duration-400 truncate`}>
                            {Menu.title}
                          </span>
                    </li>
                ))}

            </ul>

        </div>
    )
}

export default Sidebar
