import {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";
import {MdChecklist} from "react-icons/md";
import {RiSettingsLine} from "react-icons/ri";

function Sidebar(){
    let { isSidebarOpen, setIsSidebarOpen} = useContext(UserContext);

    const Menus = [
        { title: "Gelen Davetler", icon: <RiSettingsLine size={23}/> },
        { title: "Yapılacaklar", icon: <RiSettingsLine size={23}/> },
        { title: "Yapılacaklar", icon: <MdChecklist size={23}/> },
        { title: "Ayarlar", icon: <RiSettingsLine size={23}/>  },
    ];

    return(
        <div className={`${isSidebarOpen ? "w-56" : "w-20"} fixed flex flex-col top-12 transition-all border-none z-10 pl-8 pr-4  sidebar bg-opacity-20 h-screen duration-300`}>

            <img
                src="/static/images/control.png"
                className={`${!isSidebarOpen && "rotate-180"} absolute cursor-pointer -right-3 top-7 w-7 border-dark-purple border-2 rounded-full`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>

            <ul className="pt-6">

                {Menus.map((Menu, index) => (
                    <div
                        key={index}
                        className={`
                            ${Menu.gap ? "mt-9" : "mt-2"}
                            bg-opacity-40 bg-gray-200
                            flex rounded-sm p-2 cursor-pointer
                            text-gray-300
                            text-sm items-center`}>

                            {Menu.icon}

                        <span className={`${!isSidebarOpen && "hidden"} origin-left duration-300 truncate`}>
                            {Menu.title}
                          </span>
                    </div>
                ))}

            </ul>

        </div>
    )
}

export default Sidebar
