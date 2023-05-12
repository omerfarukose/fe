import React, {useContext} from "react";
import {FiSearch} from "react-icons/fi";
import {RiMessage3Line} from "react-icons/ri";
import {FiUser} from "react-icons/fi";
import {TbSettings} from "react-icons/tb";
import {LayoutContext} from "../../contexts/LayoutContext";
import {BiHomeAlt} from "react-icons/bi";


export const SidebarButton = ( props ) => {

    let { title, type } = props;

    let { showContent, setShowContent, contentType, setContentType } = useContext(LayoutContext);

    const _renderButtonIcon = (type) => {
        switch(type) {
            case 0:
                return <BiHomeAlt color={"#b3b3b3"} size={20}/>
            case 2:
                return <TbSettings color={"#b3b3b3"} size={20}/>
            case 3:
                return <FiUser color={"#b3b3b3"} size={20}/>
            case 4:
                return <RiMessage3Line color={"#b3b3b3"} size={20}/>
            case 5:
                return <FiSearch color={"#b3b3b3"} size={20}/>
            case 6:
                return <FiSearch color={"#b3b3b3"} size={20}/>
        }
    }

    return(
        <div
            onClick={() => setContentType(type)}
            className={"flex flex-row mb-2 cursor-pointer"}>

            { _renderButtonIcon(type) }

            <p className={"ml-2"}>

                { title }

            </p>

        </div>
    )
}
