import React, {useContext} from "react";
import {FiSearch} from "react-icons/fi";
import {RiMessage3Line} from "react-icons/ri";
import {FiUser} from "react-icons/fi";
import {LayoutContext} from "../../contexts/LayoutContext";
import {BiHomeAlt} from "react-icons/bi";
import {AiFillFolder} from "react-icons/ai";

export const SidebarButton = ( props ) => {

    let { title, type } = props;

    let { setContentType } = useContext(LayoutContext);

    const _renderButtonIcon = (type) => {
        switch(type) {
            case 0:
                return <BiHomeAlt color={"#b3b3b3"} size={20}/>
            case 2:
                return <AiFillFolder color={"#b3b3b3"} size={20}/>
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
            className={"flex items-center flex-row mb-4 cursor-pointer text-test-white font-semibold"}>

            { _renderButtonIcon(type) }

            <p className={"ml-2"}>

                { title }

            </p>

        </div>
    )
}
