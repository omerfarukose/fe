import {useContext} from "react";
import {RiSettingsLine} from "react-icons/ri";
import {LayoutContext} from "../../contexts/LayoutContext";

function Sidebar(){
    let { isSidebarOpen } = useContext(LayoutContext);

    const Menus = [
        { title: "Proje Oluştur", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Projelerim", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Projelerim", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Görev Listesi", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Mesajlar", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Davetler", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Ayarlar", icon: <RiSettingsLine color={"white"} size={23}/> },
    ];

    return(
        <div className={`${isSidebarOpen ? "w-52" : "w-8"} fixed flex flex-col top-12 transition-all border-none z-10 pl-8 pr-8 pt-6 sidebar bg-main-color h-screen duration-500`}>

            {Menus.map((Menu, index) => (
                <div
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

                </div>
            ))}

        </div>
    )
}

export default Sidebar
