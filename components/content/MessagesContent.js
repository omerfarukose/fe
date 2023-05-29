import React, {useState} from "react";
import {BackButton} from "../ui/BackButton";
import {Avatar} from "@mui/material";
import {RiSendPlane2Fill} from "react-icons/ri";

export default function MessagesContent (props) {

    const [message, setMessage] = useState("");

    const _renderInputItem = ( value, setValue, placeholder ) => {
        return(
            <input
                type={"1"}
                id={"1"}
                value={value}
                spellCheck={false}
                placeholder={placeholder}
                autoComplete={"off"}
                onChange={ e => setValue(e.target.value)}
                className="flex-1 bg-test-white rounded p-2 text-test-gray placeholder-gray-500"
                required/>
        )
    }

    const _renderMessageItem = ( fromMe ) => {
        return(
            <div className={"w-full flex flex-col"}>
                <div className={`w-fit mb-2 p-3 rounded-lg ${fromMe ? "rounded-br-none self-end bg-blue-600" : "text-test-gray rounded-bl-none self-start bg-gray-400"}`}>
                    test Message
                </div>
            </div>
        )
    }

    const _renderMessagesItem = ( ) => {
        return(
            <div className={"flex p-3 border-l-0 border-r-0 border-t-0 border border-gray-700 cursor-pointer h-fit w-full hover:bg-gray-700"}>

                {/*picture*/}
                <div className={"mr-4"}>
                    <Avatar alt="ömer" sx={{ width: 45, height: 45 }} src="/static/images/user2.jpg"/>
                </div>

                <div>

                    {/*title*/}
                    <div className={"text-medium text-gray-300"}>
                        Ömer Faruk KÖSE
                    </div>

                    {/*last message*/}
                    <div className={"text-sm text-gray-400"}>
                        this is my last message
                    </div>

                </div>

            </div>
        )
    }

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Messages"}/>

            <div className={"flex flex-1"}>

                <div className={"flex flex-col w-1/4 h-full bg-test-second-gray items-center"}>

                    <div className={"flex items-center justify-center w-full h-20 border-b border-gray-700"}>

                        <p className={"text-sm bg-forestGreenCrayola p-2 cursor-pointer rounded"}>
                            New Message +
                        </p>

                    </div>

                    { _renderMessagesItem() }

                    { _renderMessagesItem() }

                    { _renderMessagesItem() }

                    { _renderMessagesItem() }

                </div>

                <div className={"w-3/4 p-4 py-2"}>

                    {/*header*/}
                    <div className={"flex"}>

                        <div className={"mr-4"}>
                            <Avatar alt="ömer" sx={{ width: 55, height: 55 }} src="/static/images/user2.jpg"/>
                        </div>

                        <div className={"flex flex-col justify-evenly"}>

                            <p className={"font-bold"}>
                                Ömer Faruk KÖSE
                            </p>

                            <p className={"text-sm text-gray-400"}>
                                Pamukkale University
                            </p>

                        </div>

                    </div>

                    {/*message content*/}
                    <div className={"flex flex-1 p-3 h-5/6 flex-col justify-end"}>

                        {/*messages*/}
                        <div>

                            { _renderMessageItem(true) }

                            { _renderMessageItem(false) }

                            { _renderMessageItem(true) }

                            { _renderMessageItem(true) }

                            { _renderMessageItem(false) }

                        </div>

                    </div>

                    {/*send text input*/}
                    <div className={"flex items-center justify-between"}>

                        { _renderInputItem(message, setMessage, "Send message...") }

                        <div className={"flex w-14 items-center justify-center"}>
                            <RiSendPlane2Fill color={"#b3b3b3"} size={30}/>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
