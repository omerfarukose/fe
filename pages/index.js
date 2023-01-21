import Layout from "../components/main/layout";
import {useContext, useEffect} from "react";
import {UserContext} from "../contexts/UserContext";

export default function Home() {

  const { userData, setIsLogin } = useContext(UserContext);

  useEffect(() => {
    if(!userData){
      setIsLogin(false)
    }

  }, []);


  return (
      <Layout sidebar={false}>

        <div className={`flex w-full h-64 items-center justify-center text-tartOrange font-bold text-[60px] `}>
          <p>
            Awesome Home Page !
          </p>
        </div>

        <div className={`bg-gray-100 w-full flex flex-col justify-center py-24 px-20`}>

            <p className={"text-4xl text-center font-bold text-tartOrange"}>unipo'ya neden katılmalıyım?</p>

        </div>

      </Layout>
  )
}
