import {Modal} from "@mui/material";
import React, {useState} from "react";

export const ApplyRoleModal = ( props ) => {

    let { isOpen, onClose} = props;

    const [applyText, setApplyText] = useState("");

    return(
        <Modal
            open={isOpen}
            onClose={() => {
                onClose()
                setApplyText("")
            }}
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">

            {/*modal content*/}
            <div className={"flex flex-col justify-evenly items-center w-2/3 h-1/3 rounded bg-test-second-gray p-3"}>

                <div className={"text-3xl font-bold text-test-white"}>
                    Apply for role
                </div>

                <div className={"flex w-full justify-evenly"}>

                    <input
                        type={"1"}
                        id={"1"}
                        value={applyText}
                        spellCheck={false}
                        autoComplete={"off"}
                        placeholder={"Explanation for your application"}
                        onChange={ e => setApplyText(e.target.value)}
                        className="w-full bg-test-white rounded p-2 text-test-gray placeholder-gray-500"
                        required/>

                </div>

                <div
                    onClick={() => {
                        onClose()
                        setApplyText("")
                    }}
                    className={"bg-forestGreenCrayola rounded p-2 text-test-gray"}>
                    Apply
                </div>

            </div>

        </Modal>
    )
}
