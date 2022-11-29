import Layout from "../components/layout/layout";
import Header from "../components/header";
import Card from "../components/ui/card";
import {useContext, useEffect} from "react";
import {UserContext} from "../contexts/UserContext";

export default function Home() {

  const { userData, setIsLogin } = useContext(UserContext);

  let text1 = "Her seviyeden npm paketleri gelistirerek frontenship toplulugunda yer alan herkesi açık kaynaklı projelere contribution yapmaya ve referans gösterebilecekleri isler"
  let text2 = "Git kullanmak ekip çalısması yapabilmek, ekosistemde yaygın olarak kullanılan tooların kullanımını ve amaçlarını aktararak da alanda yen kisileri ilk is deneyimlerine hazırlamak."
  let text3 = "Sorular sorabilmek veya soruları cevaplayarak herkesin seviyesini tespit etmesini ve gelistirmesini saglamak amaçlı yardımlasmak."

  useEffect(() => {
    // console.log("User Data : ",userData)

    if(!userData){
      setIsLogin(false)
    }

  }, []);


  return (
      <Layout sidebar={false}>

        <Header/>

        <div className={`bg-white w-full flex flex-col justify-center py-24 px-20`}>

          <div className={"flex flex-col mb-12 justify-center items-center"}>
            <p className={"text-5xl -mb-7 text-blue-100"}>unipo'ya neden katılmalıyım?</p>
            <p className={"text-4xl text-center font-bold text-blue-400"}>unipo'ya neden katılmalıyım?</p>
          </div>

          <div className={"flex flex-col justify-center w-2/5 self-center"}>
            <p className={"text-center font-thin text-card-text"}>Frontend alanında sıfırdan ileri seviyelere kadar sektöre katkı saglayacak içerikler üretmek ve toplulugda destek saglamak istiyoruz.</p>
          </div>

          {/* card list */}
          <div className={"grid grid-cols-3 gap-12"}>

            <Card title={"Açık Kaynak"} text={text1}/>

            <Card title={"Deneyim"} text={text2}/>

            <Card title={"Soru Cevap"} text={text3}/>

          </div>

          <div className={"grid grid-cols-3 gap-12"}>

            <Card title={"Açık Kaynak"} text={text1}/>

            <Card title={"Deneyim"} text={text2}/>

            <Card title={"Soru Cevap"} text={text3}/>

          </div>


        </div>

      </Layout>
  )
}
