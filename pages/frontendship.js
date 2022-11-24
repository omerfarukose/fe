import Layout from "../components/layout/layout";
import Header from "../components/header";
import Card from "../components/ui/card";

export default function Frontendship() {

    let text1 = "Her seviyeden npm paketleri geliştirerek frontenship topluluğunda yer alan herkesi açık kaynaklı projelere contribution yapmaya ve referans gösterebilecekleri işler"
    let text2 = "Git kullanmak ekip çalışması yapabilmek, ekosistemde yaygın olarak kullanılan tooların kullanımını ve amaçlarını aktararak da alanda yen kişileri ilk iş deneyimlerine hazırlamak."
    let text3 = "Sorular sorabilmek veya soruları cevaplayarak herkesin seviyesini tespit etmesini ve geliştirmesini sağlamak amaçlı yardımlaşmak."

    return (
        <Layout sidebar={false}>

            <Header/>

            <div className={"bg-layout-background w-full flex flex-col justify-center py-24 px-20"}>

                <div className={"flex flex-col mb-12 justify-center items-center"}>
                    <p className={"text-5xl -mb-7 text-header-light"}>Frontendship'e neden katılmalıyım?</p>
                    <p className={"text-4xl text-center font-bold"}>Frontendship'e neden katılmalıyım?</p>
                </div>

                <div className={"flex flex-col justify-center w-2/5 self-center"}>
                    <p className={"text-center font-thin text-card-text"}>Frontend alanında sıfırdan ileri seviyelere kadar sektöre katkı sağlayacak içerikler üretmek ve topluluğda destek sağlamak istiyoruz.</p>
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
