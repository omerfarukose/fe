import React, {useState} from "react";
import Link from "next/link";

export default function Login() {

    const [isSignIn, setIsSignIn] = useState(false);
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const _renderInputItem = ( value, setValue, placeholder ) => {
        return(
            <input
                type={"1"}
                id={"1"}
                value={value}
                spellCheck={false}
                placeholder={placeholder}
                onChange={ e => setValue(e.target.value)}
                className="bg-test-white rounded w-4/5 p-2 text-test-gray placeholder-test-gray"
                required/>
        )
    }

    return(
        <div className={'flex flex-col bg-black min-h-screen'}>

            <p className={"text-white p-2 ml-2 text-xl font-bold text-test-white"}>
                unipo.
            </p>

            <div className={"flex flex-1 flex-col justify-center items-center"}>

                <div className={"flex flex-col bg-test-gray w-1/3 h-96 rounded-md justify-evenly items-center p-4"}>

                    <div className={"text-test-white justify-center font-bold text-2xl"}>
                        unipo.
                    </div>

                    {
                        showResetPassword ?
                            <>
                                <p className={"w-3/4"}>
                                    Please enter the e-mail address you'd like your password reset information sent to
                                </p>
                                { _renderInputItem(mail, setMail, "mail")}
                            </>
                        :
                            <>
                                { _renderInputItem(mail, setMail, "mail")}
                                { _renderInputItem(password, setPassword, "password")}
                            </>
                    }

                    <div className={"flex flex-row w-4/5 justify-evenly"}>

                        <Link
                            className={"flex bg-forestGreenCrayola rounded w-1/3 p-2 justify-center text-test-gray"}
                            href={"/test/home"}>

                            <div>

                                {
                                    showResetPassword ?

                                        "send"
                                        :

                                        isSignIn ?
                                            "create"
                                            :
                                            "login"
                                }

                            </div>
                        </Link>

                    </div>

                </div>

                <div
                    onClick={() => {
                        setIsSignIn(!isSignIn)
                        setShowResetPassword(false)
                    }}
                    className={"flex justify-center p-2 rounded bg-test-gray w-1/3 mt-4 text-test-white cursor-pointer"}>

                    {
                        showResetPassword ?
                            "back"
                        :
                            isSignIn ?
                                "login"
                            :
                                "create account"
                    }


                </div>

                {
                    !showResetPassword &&
                    <div
                        onClick={() => { setShowResetPassword(!showResetPassword) }}
                        className={"flex justify-center p-2 rounded bg-test-gray w-1/3 mt-4 text-test-white cursor-pointer"}>
                        reset password
                    </div>
                }


            </div>

        </div>
    )
}
