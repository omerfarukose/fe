import {useContext} from "react";
import {LayoutContext} from "../../contexts/LayoutContext";
import {RiSettingsLine} from "react-icons/ri";
import {BsGrid3X3GapFill} from "react-icons/bs";
import Link from "next/link";

function Sidebar(){
    let { isSidebarOpen, setIsSidebarOpen } = useContext(LayoutContext);

    const Menus = [
        { title: "Proje Oluştur", navigate: "/user/createProject", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Projelerim", navigate: "/user/projectList",  icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Görevlerim", navigate: "/user/createProject",  icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Mesajlar", navigate: "/user/createProject",  icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Davetler", navigate: "/user/createProject",  icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Ayarlar", navigate: "/user/createProject",  icon: <RiSettingsLine color={"white"} size={23}/> },
    ];

    return(
        <div className={`${isSidebarOpen ? "w-52" : "w-8"} fixed flex flex-col top-12 transition-all border-none z-10 pl-2 pr-12 pt-2 sidebar bg-main-color h-screen duration-500`}>

            {/*sidebar button*/}
            <div
                className={`bg-opacity-40 h-[40px] w-[40px] bg-gray-200 flex items-center justify-center p-2 aspect-square rounded-sm cursor-pointer`}
                onClick={() => {setIsSidebarOpen(!isSidebarOpen)}}>
                <BsGrid3X3GapFill size={22}/>
            </div>

            {Menus.map((Menu, index) => (
                <Link
                    href={Menu.navigate}
                    key={index}
                    className={`${!isSidebarOpen && "hidden"} mt-2 flex rounded-sm p-2 cursor-pointer items-center`}>

                    {/*icon*/}
                    {Menu.icon}

                    {/*title*/}
                    <div className={`origin-left duration-300 truncate ml-2`}>
                        <p className={"text-white text-sm"}>
                            {Menu.title}
                        </p>
                    </div>

                </Link>
            ))}

        </div>
    )
}

export default Sidebar
