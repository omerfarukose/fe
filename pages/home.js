import React, {useContext, useEffect, useState} from "react";
import {TestCard} from "../components/ui/testCard";
import {LayoutContext} from "../contexts/LayoutContext";
import SettingsContent from "../components/content/SettingsContent";
import ProjectDetail from "../components/content/ProjectDetail";
import {Sidebar} from "../components/test/Sidebar";
import SearchContent from "../components/content/SearchContent";
import ProfileContent from "../components/content/ProfileContent";
import CreateProjectContent from "../components/content/CreateProjectContent";
import UniversityDetailContent from "../components/content/UniversityDetailContent";
import {myProjects} from "../values/SampleData";
import {GetAllProjects} from "../adapter/API/request/Project";
import axios from "axios";

export default function Home() {

    let { contentType } = useContext(LayoutContext);

    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        GetAllProjects()
            .then((response) => {
                setProjectList(response?.data)
            })
    }, []);

    return (
        <div className={'flex flex-col bg-black h-screen overflow-y-scroll'}>

            {/*navbar*/}
            <p className={"text-white p-2 ml-2 text-xl font-bold text-test-white"}>
                unipo.
            </p>

            <div className={"flex flex-1 flex-row px-2"}>

                {/*sidebar*/}
                <Sidebar/>

                {/*content*/}
                {
                    contentType === 0 &&
                    <div className={"flex flex-1 flex-col px-3 overflow-scroll h-screen"}>

                        {
                            projectList.map((data, index) => (
                                <TestCard key={index} projectData={data}/>
                            ))
                        }

                    </div>
                }

                {
                    contentType === 1 &&
                    <ProjectDetail/>
                }

                {
                    contentType === 2 &&
                    <SettingsContent/>
                }

                {
                    contentType === 3 &&
                    <ProfileContent/>
                }

                {
                    contentType === 5 &&
                    <SearchContent/>
                }

                {
                    contentType === 6 &&
                    <CreateProjectContent/>
                }

                {
                    contentType === 7 &&
                    <UniversityDetailContent/>
                }

            </div>

        </div>
    )
}
