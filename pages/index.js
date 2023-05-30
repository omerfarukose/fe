import React, {useContext, useState} from "react";
import {Snackbar} from "@mui/material";
import {useRouter} from "next/router";
import {UserContext} from "../contexts/UserContext";
import {SignInRequest, SignUpRequest} from "../adapter/API/request/Auth";
import {UniversityList} from "../values/Constants";

export default function Login() {

    const router = useRouter()

    let { setUserId, setUserUniversityId } = useContext(UserContext);

    const [isSignIn, setIsSignIn] = useState(true);

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [alertMessage, setAlertMessage] = useState("Login Failed");

    function _getUniversityId(){
        let universityId = -1;

        UniversityList.map((item, index) => {
            console.log("item : ", item )
            console.log("is valid : ", mail.includes(item?.mailValue))

            if (mail.includes(item?.mailValue)) {
                universityId = item?.id
                return item?.id
            }
        })

        return universityId
    }

    function _handleSignUp(){
        let universityId = _getUniversityId()

        console.log("universityId : ",universityId)

        if (universityId !== -1) {
            let userData = {
                username: mail,
                password: password,
                university_id: universityId
            }

            console.log("userData : ", userData)

            SignUpRequest(userData)
                .then((response) => {
                    console.log("login response : ",response.data)

                    setUserId(response?.data?.id)
                    setUserUniversityId(universityId)

                    event.preventDefault();
                    router.push("/home")
                })
                .catch((error) => {
                    console.log("Login error : ",error)
                    setAlertMessage(error.message)
                    setShowSnackbar(true)
                })
        } else {
            setAlertMessage("Geçersiz Mail !")
            setShowSnackbar(true)
        }

    }

    function _handleSignIn(){
        console.log("_handleSignIn")

        let userData = {
            username: mail,
            password: password
        }

        SignInRequest(userData)
            .then((response) => {
                console.log("login response : ",response.data)

                setUserId(response?.data?.id)

                event.preventDefault();
                router.push("/home")
            })
            .catch((error) => {
                console.log("Login error : ",error)
                setAlertMessage(error.message)
                setShowSnackbar(true)
            })
    }

    const _renderInputItem = ( value, setValue, placeholder, hideText = false ) => {
        return(
            <input
                type={hideText ? "password" : ""}
                id={"1"}
                value={value}
                spellCheck={false}
                autoComplete={"off"}
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

                    <>
                        { _renderInputItem(mail, setMail, "mail")}
                        { _renderInputItem(password, setPassword, "password", true)}
                    </>

                    <div className={"flex flex-row w-4/5 justify-evenly"}>

                        <div
                            onClick={() => {
                                if (isSignIn) {
                                    _handleSignIn()
                                } else {
                                    _handleSignUp()
                                }
                            }}
                            className={"cursor-pointer flex bg-forestGreenCrayola rounded w-1/3 p-2 justify-center text-test-gray"}>

                            <div
                                >

                                {
                                    isSignIn ?
                                        "login"
                                        :
                                        "create"
                                }

                            </div>
                        </div>

                    </div>

                </div>

                <div
                    onClick={() => {
                        setIsSignIn(!isSignIn)
                    }}
                    className={"flex justify-center p-2 rounded bg-test-gray w-1/3 mt-4 text-test-white cursor-pointer"}>

                    {
                        isSignIn ?
                            "create account"
                            :
                            "login"
                    }


                </div>


                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setShowSnackbar(false)}
                    message={alertMessage}/>


            </div>

        </div>
    )
}
