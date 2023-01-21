import Layout from "../../components/main/layout";
import React, {useEffect, useRef, useState} from "react";
import Select from 'react-select'
import {GetCategoriesRequest} from "../../adapter/API/request/Category";
import {CreateProjectRequest} from "../../adapter/API/request/Project";


export default  function CreateProject(){

    const userData = useRef();
    const userInfo = useRef();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [team, setTeam] = useState("");
    const [universityId, setUniversityId] = useState("");
    const [tagId, setTagId] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [createStep, setCreateStep] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);
    const [categoryList, setCategoryList] = useState([
        { value: 'strawberry', label: 'Yapay Zeka' },
        { value: 'chocolate', label: 'Front-end' },
        { value: 'vanilla', label: 'Back-end' },
        { value: 'testOne', label: 'Mobil Uygulama' },
        { value: 'testTwo', label: 'Gömülü Sistemler' },
    ]);

    useEffect(() => {

        // userData.current = JSON.parse(localStorage.getItem("userData"));
        // userInfo.current = JSON.parse(localStorage.getItem("userInfo"));

        // GetCategoriesRequest()
        //     .then((categoryList) => {
        //         console.log("Category list : ",categoryList)
        //     })
        //     .catch(() => {})

    }, []);

    function _createProject(){
        event.preventDefault();

        if(createStep <= 5 ){

            setCreateStep(createStep+1)

        } else if (createStep === 10) {

            let projectData = {
                name: name,
                description: description,
                owner_id: userInfo.current?.id,
                team: team,
                university_id: universityId,
                tag_id: tagId,
                category_id: categoryId,
            }

            console.log("Request Data : ",projectData)

            CreateProjectRequest(projectData)
                .then(() => {
                    console.log("Project Created !")
                    // redirection to my project page
                })
                .catch(() => {})
        }

    }

    const _renderTextField = ( label, value, onChange ) => {
        return(
            <div className={"w-2/3"}>

                <p
                    className={`
                        text-white text-lg`
                    }>

                    {label}

                </p>

                <input
                    type={"text"}
                    value={value}
                    spellCheck={"false"}
                    onChange={(e) => onChange(e.target.value)}
                    className="
                        bg-gray-200 bg-opacity-40
                        border border-gray-300
                        text-white text-sm
                        rounded-lg block w-full p-2.5
                        focus:ring-blue-500 focus:border-gray-200
                        outline-0"
                    required/>
            </div>
        )
    }

    return(
        <Layout footer={false}>

            <div
                className={`
                    flex flex-col 
                    w-full h-screen
                    bg-gray-50 bg-opacity-20
                `}>

                {/* text - Create new project  */}
                <div
                    className={`
                        flex items-center justify-center
                        h-36
                        w-full text-4xl 
                    `}>

                    <p className={"font-sans"}>
                        Yeni bir proje oluştur
                    </p>

                </div>

                <form
                    onSubmit={_createProject}
                    className={`
                        flex flex-col justify-evenly items-center
                        w-full
                    `}>

                    {
                        createStep === 0 &&
                        _renderTextField("Proje Adı", name, setName)
                    }

                    {
                        createStep === 1 &&
                        _renderTextField("Proje Açıklaması", description, setDescription)
                    }

                    {
                        createStep === 2 &&
                        _renderTextField("Takım Listesi", team, setTeam)
                    }

                    {
                        createStep === 3 &&
                        _renderTextField("Üniversite", universityId, setUniversityId)
                    }

                    {
                        createStep === 4 &&
                        _renderTextField("Proje TAG Listesi", tagId, setTagId)
                    }

                    {
                        createStep === 5 &&
                        <Select
                            className={`w-1/2`}
                            isMulti
                            value={selectedTags}
                            options={categoryList}
                            onChange={setSelectedTags}/>
                    }

                    {
                        createStep === 6 &&
                        <div>
                            Projeniz Oluşturuldu !
                        </div>
                    }

                    <button
                        type="submit"
                        className={`
                            px-6 py-2.5 mx-2
                            text-gray-700 text-md font-medium text-center                     
                            bg-white rounded-lg 
                            hover:bg-gray-100
                            m-24
                            focus:outline-none focus:ring-blue-300
                        `}>

                        İleri

                    </button>

                </form>

            </div>
        </Layout>
    )
}
