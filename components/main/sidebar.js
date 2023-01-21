import {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";
import {MdChecklist} from "react-icons/md";
import {RiSettingsLine} from "react-icons/ri";

function Sidebar(){
    let { isSidebarOpen, setIsSidebarOpen} = useContext(UserContext);

    const Menus = [
        { title: "Gelen Davetler", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Yapılacaklar", icon: <RiSettingsLine color={"white"} size={23}/> },
        { title: "Yapılacaklar", icon: <MdChecklist color={"white"} size={23}/> },
        { title: "Ayarlar", icon: <RiSettingsLine color={"white"} size={23}/>  },
    ];

    return(
        <div className={`${isSidebarOpen ? "w-56" : "w-24"} fixed flex flex-col top-12 transition-all border-none z-10 pl-8 pr-4 pt-6 sidebar bg-opacity-20 h-screen duration-300`}>

            <img
                alt={"sidebar-control-image"}
                src="/static/images/control.png"
                className={`${!isSidebarOpen && "rotate-180"} absolute cursor-pointer -right-3 top-7 w-7 border-dark-purple border-2 rounded-full`}
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}/>

                {Menus.map((Menu, index) => (
                    <div
                        key={index}
                        className={`                            
                            bg-tartOrange mt-2
                            flex rounded-sm p-2 cursor-pointer
                            items-center`
                        }>

                            {Menu.icon}

                        <div className={`${!isSidebarOpen && "hidden"} origin-left duration-300 truncate ml-2`}>

                            <p className={"text-white text-sm "}>

                                {Menu.title}

                            </p>

                        </div>

                    </div>
                ))}

        </div>
    )
}

export default Sidebar
