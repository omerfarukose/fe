import Layout from "../../components/main/layout";
import {useState} from "react";
import {BiUser} from "react-icons/bi";
import {GiGreekTemple} from "react-icons/gi";
import Link from "next/link";

export default function ProjectList ( ) {

    let sampleProjectData = {
        name: "Sample Project Name",
        ownerName: "Sample Owner Name",
        university :"Test University",
    }

    const [projectList, setProjectList] = useState([sampleProjectData, sampleProjectData, sampleProjectData, sampleProjectData]);

    const _renderProjectItem = ( projectData ) => {
        return(
            <Link href={"manageProject"} className={"border-main-color border-2 rounded-lg w-full text-main-color p-4"}>

                {/*project name*/}
                <div className={"font-bold text-2xl mb-2"}>
                    { projectData.name }
                </div>

                {/* owner name */}
                <div className={"flex"}>

                    <BiUser size={25}/>

                    <div className={"font-medium text-xl ml-2"}>
                        { projectData.ownerName }
                    </div>

                </div>

                {/* owner university */}
                <div className={"flex"}>

                    <GiGreekTemple size={25}/>

                    <div className={"font-medium text-xl ml-2"}>
                        { projectData.university }
                    </div>

                </div>

            </Link>
        )
    }

    return(
        <Layout>

            <div className={"p-8"}>

                <div className={"text-4xl font-bold text-main-color"}>
                    Projelerim
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">

                    {
                        projectList.map((project) => (
                            _renderProjectItem(project)
                        ))
                    }

                </div>

            </div>

        </Layout>
    )
}
