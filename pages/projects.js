import Layout from "../components/main/layout";
import Card from "../components/ui/card";

export default function Project(){

    return(
        <Layout>

            <div className={`flex items-center justify-center`}>

                <div className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2`}>

                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>

                </div>

            </div>

        </Layout>
    )
}
