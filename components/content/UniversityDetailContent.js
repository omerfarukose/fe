import React, {useContext, useEffect, useState} from "react";
import {BackButton} from "../ui/BackButton";
import {Avatar, breadcrumbsClasses} from "@mui/material";
import {TbSchool} from "react-icons/tb";
import {BsFillHeartFill} from "react-icons/bs";
import {AiOutlineUser} from "react-icons/ai";
import {LayoutContext} from "../../contexts/LayoutContext";
import {GetUniversityProjectListRequest} from "../../adapter/API/request/Project";
import {TestCard} from "../ui/testCard";
import {UniversityList} from "../../values/Constants";

export default function UniversityDetailContent (props) {

    let { selectedUniversity } = useContext(LayoutContext);

    const [projectList, setProjectList] = useState([]);
    const [universityInfo, setUniversityInfo] = useState({});

    useEffect(() => {
        getUniversityInfo()
        getUniversityProjectList()
    }, []);

    function getUniversityProjectList(){
        let requestData = {
            university_id: selectedUniversity
        }

        GetUniversityProjectListRequest(requestData)
            .then((response) => {
                setProjectList(response?.data)
            })
    }

    function getUniversityInfo(){
        UniversityList.map((item) => {
            if (selectedUniversity === item?.id) {
                setUniversityInfo(item)
            }
        })
    }

    return(
        <div className="flex flex-1 flex-col w-full mx-3 mb-3 rounded">

            <BackButton title={"University"}/>

            <div className={"p-6 flex bg-test-gray mb-2"}>

                <div className={"w-48 bg-test-second-gray h-48 flex flex-col items-center justify-evenly rounded cursor-pointer hover:bg-test-third-gray"}>

                    <div className={"border border-2 border-white rounded-full"}>
                        <Avatar sx={{ width: 120, height: 120 }} alt="Remy Sharp" src={universityInfo.logo} />
                    </div>

                </div>

                <div className={"px-6 flex flex-col justify-end"}>

                    <p className={"flex flex-1 items-center font-bold text-4xl"}>
                        {universityInfo.name}
                    </p>

                    <div className={"flex items-center font-medium text-xl text-test-white"}>

                        {/*<AiOutlineUser color={"#b3b3b3"} size={18}/>*/}

                        {/*<p className={"ml-1 mr-8"}>*/}
                        {/*    123 Student*/}
                        {/*</p>*/}

                        <>
                            <BsFillHeartFill color={"#ef233c"} size={18}/>

                            <p className={"ml-1"}>
                                {projectList?.length > 0 ? projectList?.length : 0} Proje
                            </p>
                        </>

                    </div>

                </div>

            </div>

            {
                projectList.map((data, index) => (
                    <TestCard key={index} projectData={data}/>
                ))
            }

        </div>
    )
}
