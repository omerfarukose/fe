import React, {useState} from 'react';
import { useRouter } from 'next/router'
import {Snackbar} from "@mui/material";
import Layout from "../components/main/layout";
import {SignInRequest, SignUpRequest} from "../adapter/API/request/Auth";
import {sampleUserData} from "../values/SampleData";

export default function Login() {

    const router = useRouter()

    const [showSignIn, setShowSignIn] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [alertMessage, setAlertMessage] = useState("Login Failed");

    function _handleSignUp(){

        // event.preventDefault();
        //
        // let userData = {
        //     email: email,
        //     password: password
        // }
        //
        // SignUpRequest(userData)
        //     .then((response) => {
        //         setAlertMessage("User Created")
        //         setShowSnackbar(true)
        //     })
        //     .catch((error) => {
        //         console.log("Login error : ",error)
        //
        //         setAlertMessage(error.message)
        //         setShowSnackbar(true)
        //     })
    }

    function _handleSignIn(){

        // ------ FOR TEST -----------
        router.push("/")
        event.preventDefault();

        // event.preventDefault();
        //
        // router.push("/")
        //
        // let userData = {
        //     email: email,
        //     password: password
        // }
        //
        // SignInRequest(userData)
        //     .then((response) => {
        //         console.log("login response : ",response)
        //
        //         _setLocaleData(response?.data)
        //         router.push("/")
        //     })
        //     .catch((error) => {
        //         console.log("Login error : ",error)
        //         setAlertMessage(error.message)
        //         setShowSnackbar(true)
        //     })
    }

    function _setLocaleData( data ){
        let userData = JSON.stringify(data)
        let userInfo = JSON.stringify(data?.user)

        if (typeof window !== "undefined") {
            localStorage.setItem("userData",userData)
            localStorage.setItem("userInfo",userInfo)
        }
    }

    const _renderInputView = ( type, value, setValue ) => {
        return(
            <div className="mb-6 w-full">
                <input
                    type={type}
                    id={type}
                    value={value}
                    onChange={ e => setValue(e.target.value)}
                    className="bg-gray-300 bg-opacity-40 placeholder-gray-100 border border-gray-300 text-main-color text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={type}
                    required/>
            </div>
        )
    }

    return (
        <Layout sidebar={false} navbar={true} navbarItems={false}>

            <div className={"flex w-screen min-h-screen items-center justify-center bg-white"}>

                {/* form view */}
                <div  className={'flex flex-col w-1/2 text-white rounded p-10 items-center justify-center'}>

                    <div className={"text-4xl font-bold text-main-color"}>

                        unipo.

                    </div>

                    <form onSubmit={showSignIn ? _handleSignIn : _handleSignUp } className={"flex flex-col w-full items-center"}>

                        {/* e mail input */}
                        { _renderInputView("email", email, setEmail) }

                        {/* password input */}
                        { _renderInputView("password", password, setPassword) }

                        <div className={'flex flex-col w-full items-center justify-evenly'}>

                            <button
                                type="submit"
                                className={'text-white text-sm font-medium text-center px-5 py-2.5 w-full mx-2 bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-blue-300'}>

                                { showSignIn ? "Giriş Yap" : "Kayıt Ol" }

                            </button>

                            <div
                                onClick={() => setShowSignIn(!showSignIn)}
                                className={"cursor-pointer mt-4 text-blue-400 text-sm"}>

                                { showSignIn ? "Kayıt Ol" : "Giriş Yap" }

                            </div>

                        </div>

                    </form>

                </div>

                {/*image view*/}
                <div className={"h-1/2 w-1/2"}>
                    <img
                        alt={"sidebar-control-image"}
                        src="/static/images/team-image.png"
                        className={"h-full w-full"}
                       />
                </div>

            </div>

            <Snackbar
                open={showSnackbar}
                autoHideDuration={6000}
                onClose={() => setShowSnackbar(false)}
                message={alertMessage}/>

        </Layout>
    )
};


