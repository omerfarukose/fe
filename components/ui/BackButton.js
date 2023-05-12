import React, {useContext} from "react";
import {LayoutContext} from "../../contexts/LayoutContext";
import {FaChevronCircleLeft} from "react-icons/fa";

export const BackButton = ( props ) => {

    let { setContentType } = useContext(LayoutContext);

    let { title } = props;

    return(
        <div className={"flex items-center w-full h-10 pl-3 rounded-t "}>

            <div className={"flex justify-between pr-4 items-center rounded-full h-6 w-full text-test-white font-bold"}>

                <div
                    onClick={() => setContentType(0)}>
                    <FaChevronCircleLeft color={"#b3b3b3"} size={22}/>
                </div>


                <p className={"ml-4 text-xl"}>
                    {title}
                </p>

            </div>

        </div>
    )
}
