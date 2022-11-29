import React, {useState, useContext, useEffect} from 'react';
import { useRouter } from 'next/router'
import { SignInRequest, SignUpRequest} from "../request/RequestList";
import {Snackbar} from "@mui/material";
import {UserContext} from "../contexts/UserContext";
import Layout from "../components/layout/layout";

export default function Login() {

    const router = useRouter()

    const [formType, setFormType] = useState("signIn");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [alertMessage, setAlertMessage] = useState("Login Failed");

    function handleInputChange(type,text){

        switch (type){
            case "email":
                setEmail(text)
                break;
            case "password":
                setPassword(text)
                break;
        }
    }

    function _signUp(){

        event.preventDefault();

        let userData = {
            email: email,
            password: password
        }

        SignUpRequest(userData)
            .then((response) => {
                // setUserInfoData(response)

                setAlertMessage("User Created")
                setShowSnackbar(true)

                // if (typeof window !== "undefined") {
                //     localStorage.setItem("isLogin","true")
                // }

                // router.push("/")
            })
            .catch((error) => {
                console.log("Login error : ",error)

                setAlertMessage(error.message)
                setShowSnackbar(true)
            })
    }

    function _signInRequest(){

        event.preventDefault();

        let userData = {
            email: email,
            password: password
        }

        SignInRequest(userData)
            .then((response) => {
                console.log("login response : ",response)

                _setLocaleData(response?.data)

                router.push("/")
            })
            .catch((error) => {
                console.log("Login error : ",error)
                setAlertMessage(error.message)
                setShowSnackbar(true)
            })
    }

    function _setLocaleData( data ){
        let userData = JSON.stringify(data)
        let userInfo = JSON.stringify(data?.user)

        if (typeof window !== "undefined") {
            localStorage.setItem("userData",userData)
            localStorage.setItem("userInfo",userInfo)
        }
    }

    const _renderInputView = ( type, placeholder, value ) => {
        return(
            <div className="mb-6 w-full">
                <input
                    type={type}
                    id={type}
                    value={value}
                    onChange={ e => handleInputChange(type, e.target.value)}
                    className="bg-gray-300 bg-opacity-40 placeholder-gray-100 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder={placeholder}
                    required/>
            </div>
        )
    }

    const _renderSignInInputForm = ( ) => {
        return(
            <form onSubmit={_signInRequest} className={"flex flex-col w-full items-center"}>

                {/* e mail input */}
                { _renderInputView("email","E-Mail", email) }

                {/* password input */}
                { _renderInputView("password","Password", password) }

                <div className={'flex flex-col w-full items-center justify-evenly'}>
                    {/* submit button */}
                    <button
                        type="submit"
                        className={'text-white text-sm font-medium text-center px-5 py-2.5 w-full mx-2 bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-blue-300'}>

                        Sign In

                    </button>

                    {/* submit button */}

                    <div
                        onClick={() => setFormType("signUp")}
                        className={"cursor-pointer mt-4 text-blue-400 text-sm"}>
                        Sign Up
                    </div>

                </div>

            </form>
        )
    }

    const _renderSignUpInputForm = ( ) => {
        return(
            <form onSubmit={_signUp} className={"flex flex-col w-full items-center"}>

                {/* e mail input */}
                { _renderInputView("email","E-Mail", email) }

                {/* password input */}
                { _renderInputView("password","Password", password) }

                <div className={'flex flex-col w-full items-center justify-evenly'}>
                    {/* submit button */}
                    <button
                        type="submit"
                        className={'text-white text-sm font-medium text-center px-5 py-2.5 w-full mx-2 bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-blue-300'}>

                        Sign Up

                    </button>

                    <div
                        onClick={() => setFormType("signIn")}
                        className={"cursor-pointer mt-4 text-blue-400 text-sm"}>

                        Sign In

                    </div>
                </div>

            </form>
        )
    }

    return (
        <Layout sidebar={false} navbar={true} navbarItems={false}>
            <div className={"flex flex-col w-screen min-h-screen items-center justify-center"}>

                {/* form container */}
                <div  className={'flex w-1/2 text-white rounded p-10 items-center justify-center'}>

                    {
                        formType === "signIn" ?

                            _renderSignInInputForm()
                            :
                            _renderSignUpInputForm()
                    }

                </div>

                <Snackbar
                    open={showSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setShowSnackbar(false)}
                    message={alertMessage}/>

            </div>
        </Layout>
    )
};


