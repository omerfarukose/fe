import {useContext} from "react";
import {LayoutContext} from "../../contexts/LayoutContext";
import {RiSettingsLine} from "react-icons/ri";
import {BsGrid3X3GapFill} from "react-icons/bs";
import Link from "next/link";

function Testbar(){

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
        <div className={`fixed flex flex-col top-16 left-8 sidebar bg-white border border-gray-200 rounded-lg border-2 w-60 h-72`}>

            test bar

        </div>
    )
}

export default Testbar
