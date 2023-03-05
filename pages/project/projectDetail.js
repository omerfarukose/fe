import Layout from "../../components/main/layout";
import {BiUser} from "react-icons/bi";
import {GiGreekTemple} from "react-icons/gi";
import {useEffect, useState} from "react";
import {GetProjectDataRequest} from "../../adapter/API/request/Project";

export default function ProjectDetail(props){

    let { projectId } = props

    const [projectData, setProjectData] = useState();

    useEffect(() => {
        // get project data

    }, []);

    const _getProjectData = ( ) => {
        GetProjectDataRequest(projectId)
            .then((response) => {
                setProjectData(response?.data)
            })
            .catch((error) => {})
    }


    return(
        <Layout>

            <div className={"flex text-main-color p-4"}>

                {/*left view*/}
                <div>

                    {/* roles */}
                    <div className={"border-main-color border-2 p-2 rounded-lg mb-4 h-56 w-56"}>
                        Aranan Roller
                    </div>

                    {/* owner info */}
                    <div className={"text-medium border-main-color border-2 p-2 rounded-lg mb-4 h-56 w-56"}>

                        {/* owner name */}
                        <div className={"flex"}>

                            <BiUser size={15}/>

                            <div className={"ml-2"}>
                                Ömer Faruk KÖSE
                            </div>

                        </div>

                        {/* owner university */}
                        <div className={"flex"}>

                            <GiGreekTemple size={15}/>

                            <div className={"ml-2"}>
                                PAMUKKALE UNIVERSITY
                            </div>

                        </div>

                    </div>

                    {/* team */}
                    <div className={"border-main-color border-2 p-2 rounded-lg mb-4 h-56 w-56"}>
                        team
                    </div>

                </div>

                {/*right view*/}
                <div className={"flex flex-1 flex-col px-8"}>

                    {/*header*/}
                    <div className={"flex w-full justify-between mb-12 items-center"}>

                        {/*project name*/}
                        <div className={"font-bold text-2xl"}>
                            Example Project Name
                        </div>

                        {/*join button*/}
                        <div className={"bg-main-color py-2 px-4 rounded-lg text-medium text-white"}>
                            Join
                        </div>

                    </div>

                    {/*content*/}
                    <div>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </div>

                </div>

            </div>

        </Layout>
    )
}
