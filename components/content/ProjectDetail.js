import {BackButton} from "../ui/BackButton";
import React, {useContext, useEffect, useState} from "react";
import {Avatar, Modal, Snackbar} from "@mui/material";
import {TbListCheck} from "react-icons/tb";
import {BiEnvelope} from "react-icons/bi";
import {HiOutlineClock} from "react-icons/hi";
import {IoIosCloseCircle, IoIosAddCircle} from "react-icons/io";
import {LayoutContext} from "../../contexts/LayoutContext";
import {ApplyRoleModal} from "../modal/ApplyRoleModal";
import {UserContext} from "../../contexts/UserContext";
import {AiFillCloseSquare, AiFillCheckSquare, AiOutlineUserAdd} from "react-icons/ai";
import {
    ApproveMemberRequest, CompleteTaskRequest,
    GetMemberListRequest, GetProjectTaskListRequest,
    GetUserDataRequest,
    SetProjectMemberRequest
} from "../../adapter/API/request/Project";
import {UniversityList} from "../../values/Constants";

export default function ProjectDetail (props) {

    let { projectData } = useContext(LayoutContext);

    let { userId } = useContext(UserContext)

    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isInvitesModalVisible, setIsInvitesModalVisible] = useState(false);
    const [taskValue, setTaskValue] = useState("");
    const [showParticipantTasks, setShowParticipantTasks] = useState(false);
    const [todoList, setTodoList] = useState(["task1", "task2"]);
    const [selectedParticipant, setSelectedParticipant] = useState({});
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [memberList, setMemberList] = useState([]);
    const [approvedMember, setApprovedMembers] = useState([]);
    const [taskList, setTaskList] = useState([]);
    const [projectUniversity, setProjectUniversity] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);


    useEffect(() => {
        console.log("Project data : ", projectData)
        getProjectMembers()
        getProjectTaskList()
        getProjectUniversity()
    }, []);

    function getProjectUniversity(){
        UniversityList.map((item) => {
            if(projectData?.university_id === item?.id) {
                setProjectUniversity(item?.name)
            }
        })
    }

    function getUserData(itemUserId, isApproved, memberId){
        let requestData = {
            id: itemUserId
        }

        GetUserDataRequest(requestData)
            .then((response) => {

                let userFullName = response?.data?.username

                let isUserExist = false

                if (isApproved) {

                    approvedMember.map((item) => {
                        if (item?.id === itemUserId) {
                            isUserExist = true
                        }
                    })

                    if (!isUserExist) {
                        setApprovedMembers(oldArray => [...oldArray, {id: itemUserId, username: userFullName.substring(0, userFullName.indexOf("@"))}]);
                    } else {
                        console.log("user already exist ! 1")
                    }

                } else {

                    console.log("memberId : ", memberId)
                    console.log("userId : ", userId)

                    if (itemUserId === projectData?.owner ) {

                        approvedMember.map((item) => {
                            if (item?.id === itemUserId) {
                                isUserExist = true
                            }
                        })

                        if (!isUserExist) {
                            setApprovedMembers(oldArray => [...oldArray, {id: itemUserId, username: userFullName.substring(0, userFullName.indexOf("@"))}]);
                        } else {
                            console.log("user already exist ! 2")
                        }

                    } else {
                        setMemberList(oldArray => [...oldArray, {id: itemUserId, username: userFullName.substring(0, userFullName.indexOf("@")), memberId:memberId}]);
                    }

                }
            })
    }

    function getProjectMembers(){
        let requestData = {
            project_id: projectData?.id
        }

        GetMemberListRequest(requestData)
            .then((res) => {

                res?.data?.map((item) => {
                    console.log("my - item : ",item)
                    getUserData(item?.user_id, item?.is_approved, item?.id)
                })

            })
    }

    function getProjectTaskList(){
        let requestData = {
            id: projectData?.id
        }

        GetProjectTaskListRequest(requestData)
            .then((res) => {
                setTaskList(res?.data)
            })
    }

    function handleJoinRequest(){
        let requestData = {
            user_id: userId,
            project_id: projectData?.id
        }

        SetProjectMemberRequest(requestData)
            .then((response) => {
                console.log("User added to project !")
            })
    }

    function handleMemberApprove(memberId){
        let requestData = {
            id: memberId
        }

        ApproveMemberRequest(requestData)
            .then((response) => {
                console.log("User added to project !")

                getProjectMembers()
                setIsInvitesModalVisible(false)
                setShowSnackbar(true)
            })
    }

    function handleCompleteTask(item){
        let requestData = {
            id: projectData?.id,
            todoId: item?.id,
            isDone: true,
            description: item?.description
        }

        CompleteTaskRequest(requestData)
            .then(() => {

            })
    }

    const _renderTaskItem = (item) => {
        console.log("_renderTaskItem : ", item)
        return(
            <div
                onClick={() => {
                    if (!item?.is_done){
                        handleCompleteTask(item)
                    }
                }}
                className={"bg-test-third-gray mb-2"}>

                <p className={"text-sm p-1"}>
                    { item?.description }
                </p>

            </div>
        )
    }

    const _renderMemberItem = ( user ) => {
        console.log("_renderMemberItem user : ", user)
        return(
            <div className={"flex w-2/5 items-center justify-between rounded h-fit p-2 mb-2 bg-test-third-gray"}>

                <div className={"flex items-center"}>
                    <div className={"mr-2"}>
                        <Avatar alt="ömer" sx={{ width: 30, height: 30 }} src="/static/images/user-logo.png"/>
                    </div>

                    <p className={"text-medium font-bold text-test-white p-2"}>
                        {user?.username}
                    </p>
                </div>

                <div className={"flex"}>
                    <div
                        onClick={() => {
                            handleMemberApprove(user.memberId)
                        }}>
                        <AiFillCheckSquare color={"#b3b3b3"} size={30}/>
                    </div>


                    <AiFillCloseSquare color={"#b3b3b3"} size={30}/>
                </div>



            </div>
        )
    }

    const _renderApprovedItem = ( user ) => {
        console.log("_renderApprovedItem : ", user)
        return(
            <div
                className={"flex w-10/12 items-center rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                <div className={"mr-2"}>
                    <Avatar alt="ömer" sx={{ width: 30, height: 30 }} src="/static/images/user-logo.png"/>
                </div>

                <div>
                    <p className={"text-medium"}> { user?.username } </p>
                </div>

            </div>
        )
    }

    function formatDate(date){
        const originalTime =  date;
        const formattedTime = new Date(originalTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedDate = new Date(originalTime).toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });

        let convertedTime = `${formattedTime} ${formattedDate}`;

        return convertedTime
    }

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Proje Detayı"}/>

            {/*header*/}
            <div className={"p-6 flex"}>

                <div className={"font-bold text-5xl p-8 pt-2 h-40 w-40 bg-gray-800 rounded-sm flex justify-center items-center"}>
                    P
                </div>

                <div className={"px-6 flex flex-col justify-end"}>

                    <div className={"flex flex-1 items-center font-bold text-4xl"}>
                        <p className={"mr-6"}>
                            {projectData.name}
                        </p>
                    </div>

                    <div className={"flex flex-1 items-center font-bold text-2xl"}>
                        <p className={"mr-6"}>
                            {projectUniversity}
                        </p>
                    </div>

                    <div className={"flex items-center font-medium text-medium text-test-white"}>

                        <HiOutlineClock color={"#b3b3b3"} size={15}/>

                        <p className={"ml-1"}>
                            { formatDate(projectData?.created_at) }
                        </p>

                    </div>

                </div>

            </div>

            <div className={"flex flex-row w-full p-6"}>

                {/*left side*/}
                <div className={"w-1/4 items-start"}>

                    {
                        userId === projectData?.owner ?
                            <div
                                onClick={() => setIsInvitesModalVisible(true)}
                                className={"flex items-center w-10/12 rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                                <BiEnvelope color={"#b3b3b3"} size={20}/>

                                <p className={"text-medium font-bold text-test-white p-2"}>
                                    İstekler
                                </p>

                            </div>

                        :
                            <div
                                onClick={() => handleJoinRequest()}
                                className={"flex items-center w-10/12 rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                                <AiOutlineUserAdd color={"#b3b3b3"} size={20}/>

                                <p className={"text-medium font-bold text-test-white p-2"}>
                                    Katılma İsteği
                                </p>

                            </div>
                    }



                    <div
                        onClick={() => setShowParticipantTasks(true)}
                        className={"flex items-center w-10/12 rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                        <TbListCheck color={"#b3b3b3"} size={20}/>

                        <p className={"text-medium font-bold text-test-white p-2"}>
                            Görev Listesi
                        </p>

                    </div>

                    <p className={"text-medium font-bold text-test-white p-2"}>
                        Takım
                    </p>

                    {
                        approvedMember.length > 0 &&
                        approvedMember.map((user, index) => (
                            _renderApprovedItem(user)
                        ))
                    }

                </div>

                {/*right side*/}
                <div className={"w-3/4"}>

                    {
                        showParticipantTasks ?
                            <div className={"h-full"}>

                                <div className={"flex w-full bg-test-second-gray p-2 justify-between items-center mb-2"}>

                                    <p className={"text-xl font-bold text-white"}>
                                        { selectedParticipant.name } Task List
                                    </p>

                                    <div
                                        onClick={() => setShowParticipantTasks(false)}
                                        className={"cursor-pointer"}>

                                        <IoIosCloseCircle color={"#b3b3b3"} size={25}/>

                                    </div>

                                </div>

                                {/*task content*/}
                                <div className={"flex"}>

                                    {/*in progress*/}
                                    <div className={"flex flex-col flex-1 bg-test-second-gray p-3 pb-4 mr-1"}>

                                        <div className={"flex justify-between items-center mb-3"}>

                                            <p className={"font-bold mr-2"}>
                                                TODO
                                            </p>

                                            <div
                                                onClick={() => setIsTaskModalOpen(true)}
                                                className={"cursor-pointer"}>

                                                <IoIosAddCircle color={"#b3b3b3"} size={25}/>

                                            </div>

                                        </div>

                                        {
                                            taskList?.map((task) => (
                                                task?.is_done ? null : _renderTaskItem(task)
                                            ))
                                        }

                                    </div>

                                    {/*compeleted*/}
                                    <div className={"flex flex-col flex-1 bg-test-second-gray p-3 ml-1"}>

                                        <div className={"flex items-center mb-3"}>

                                            <p className={"font-bold mr-2"}>
                                                Completed
                                            </p>

                                            {/*<FaRegCheckCircle color={"#b3b3b3"} size={18}/>*/}

                                        </div>


                                        <div className={"bg-test-third-gray"}>

                                            {
                                                taskList?.map((task) => (
                                                    task?.is_done ? _renderTaskItem(task) : null
                                                ))
                                            }

                                        </div>

                                    </div>

                                </div>

                            </div>

                        :

                            <div>
                                <p className={"text-xl font-bold text-test-white mb-4"}>
                                    Proje Açıklaması
                                </p>

                                <p className={"text-medium font-bold text-white mb-4"}>
                                    { projectData.description }
                                </p>
                            </div>
                    }

                </div>

            </div>

            {/*invites modal*/}
            <Modal
                open={isInvitesModalVisible}
                onClose={() => setIsInvitesModalVisible(false)}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                {/*modal content*/}
                <div className={"flex flex-col justify-evenly items-center w-2/3 h-fit rounded bg-test-second-gray p-3"}>

                    <div className={"text-3xl font-bold text-test-white"}>
                        Katılma İstekleri
                    </div>

                    {
                        memberList.length > 0 &&

                            memberList?.map((user) => (
                                _renderMemberItem(user)
                            ))

                    }

                </div>

            </Modal>

            {/*task modal*/}
            <Modal
                open={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                style={{display:'flex',alignItems:'center',justifyContent:'center', outline: "none"}}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                {/*modal content*/}
                <div className={"flex flex-col justify-evenly items-center w-2/3 h-1/3 rounded bg-test-second-gray p-3"}>

                    <div className={"text-3xl font-bold text-test-white"}>
                        Create task for Omer
                    </div>

                    <div className={"flex w-full justify-evenly"}>

                        <input
                            type={"1"}
                            id={"1"}
                            value={taskValue}
                            spellCheck={false}
                            autoComplete={"off"}
                            onChange={ e => setTaskValue(e.target.value)}
                            className="w-11/12 bg-test-white rounded p-2 text-test-gray placeholder-gray-500"
                            required/>

                    </div>

                    <div
                        onClick={() => {
                            setTaskValue("")
                            setIsModalOpen(false)
                            setTodoList(prevList => ([...prevList, taskValue]))
                        }}
                        className={"bg-forestGreenCrayola rounded p-2 text-test-gray"}>
                        Create
                    </div>

                </div>

            </Modal>

            <Snackbar
                open={showSnackbar}
                autoHideDuration={6000}
                onClose={() => setShowSnackbar(false)}
                message={"Kullanıcı kabul edildi !"}/>

            <ApplyRoleModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />

        </div>
    )
}
