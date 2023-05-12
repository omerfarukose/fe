import {RiHome6Fill} from "react-icons/ri";
import React, {useContext} from "react";
import {SidebarButton} from "../ui/SidebarButton";
import {LayoutContext} from "../../contexts/LayoutContext";
import {MdAddCircle} from "react-icons/md";
import {FiLogIn} from "react-icons/fi";
import Link from "next/link";

export const Sidebar = ( ) => {

    let { setContentType } = useContext(LayoutContext);

    const _renderProjectItem = ( ) => {
        return(
            <div
                onClick={() => setContentType(1)}
                className={"flex flex-row items-center mb-4 hover:bg-gray-800 hover:rounded p-1"}>

                <div className={"h-10 w-10 mr-2 bg-test-white rounded flex justify-center items-center text-black"}>
                    P
                </div>

                <div>

                    <div className={"text-medium"}>
                        Sample Project Name
                    </div>

                    <div className={"text-medium font-medium"}>
                        Sample University
                    </div>

                </div>

            </div>
        )
    }

    return(
        <div className={"w-1/6"}>

            {/*main buttons*/}
            <div className={"bg-test-gray h-fit p-3 rounded-md text-test-white justify-center font-bold mb-3"}>

                <SidebarButton title={"Home"} type={0}/>
                <SidebarButton title={"Profile"} type={3}/>
                <SidebarButton title={"Messages"} type={4}/>
                <SidebarButton title={"Search"} type={5}/>
                <SidebarButton title={"Settings"} type={2}/>

            </div>

            {/* projects */}
            <div className={"bg-test-gray h-fit p-3 rounded-md text-test-white justify-center font-bold mb-3"}>

                {/*title*/}
                <div className={"flex flex-row mb-4 justify-between"}>

                    <p> Projects </p>

                    <div
                        onClick={() => setContentType(6)}>
                        <MdAddCircle color={"#b3b3b3"} size={20}/>

                    </div>

                </div>

                {/*project button*/}
                { _renderProjectItem() }
                { _renderProjectItem() }
                { _renderProjectItem() }
                { _renderProjectItem() }

            </div>

            {/*logout button*/}
            <Link
                className={"flex bg-test-gray p-3 h-fit rounded-md items-center text-test-white cursor-pointer font-bold mb-3"}
                href={"/test/login"}>

                <FiLogIn color={"#b3b3b3"} size={20}/>

                <p className={"ml-2"}>

                    Logout

                </p>

            </Link>


        </div>
    )
}
