import { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false);

    const [userData, setUserData] = useState({});
    const [userInfo, setUserInfo] = useState({});

    const setUserInfoData = ( value ) => {
        if(value){
            setUserData(value?.data)
            setUserInfo(value?.data?.user)
        }
        else {
            setIsLogin(false)
            setUserData(null)
            setUserInfo(null)
        }
    }

    return (
        <UserContext.Provider
            value={{
                isLogin, setIsLogin,
                userData, setUserInfoData,
                userInfo, setUserInfo,
            }}>

            {children}

        </UserContext.Provider>
    );
}

export const UserConsumer = UserContext.Consumer;

