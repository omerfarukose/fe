import {BackButton} from "../ui/BackButton";
import React, {useContext, useEffect, useState} from "react";
import {Avatar, Modal} from "@mui/material";
import {TbListCheck} from "react-icons/tb";
import {BiEnvelope} from "react-icons/bi";
import {HiOutlineClock} from "react-icons/hi";
import {IoIosCloseCircle, IoIosAddCircle} from "react-icons/io";
import {LayoutContext} from "../../contexts/LayoutContext";
import {sampleUserList} from "../../values/SampleData";
import {ApplyRoleModal} from "../modal/ApplyRoleModal";
import {UserContext} from "../../contexts/UserContext";
import {AiFillCloseSquare, AiFillCheckSquare, AiFillCloud} from "react-icons/ai";
import {
    ApproveMemberRequest,
    GetMemberListRequest,
    GetUserDataRequest,
    SetProjectMemberRequest
} from "../../adapter/API/request/Project";

export default function ProjectDetail (props) {

    let { projectData } = useContext(LayoutContext);

    let { userId } = useContext(UserContext)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isInvitesModalVisible, setIsInvitesModalVisible] = useState(false);
    const [taskValue, setTaskValue] = useState("");
    const [showParticipantTasks, setShowParticipantTasks] = useState(false);
    const [todoList, setTodoList] = useState(["task1", "task2"]);
    const [participantsList, setParticipantsList] = useState([]);
    const [selectedParticipant, setSelectedParticipant] = useState({});
    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const [memberList, setMemberList] = useState([]);
    const [approvedMember, setApprovedMembers] = useState([]);

    useEffect(() => {
        console.log("Project data : ", projectData)
        getProjectMembers()
    }, []);

    function getUserData(userId){
        let requestData = {
            id: userId
        }

        GetUserDataRequest(requestData)
            .then((response) => {
                return response?.data?.username
            })
    }

    function getProjectMembers(){
        let requestData = {
            project_id: projectData?.id
        }

        GetMemberListRequest(requestData)
            .then((res) => {
                console.log("res: ", res)
                let filteredList = res?.data?.filter(function (el) {
                    return el.is_approved
                });

                let approvedList  = res?.data?.filter(function (el) {
                    return !el.is_approved
                });

                console.log("filtered list : ", filteredList)

                setMemberList(filteredList)
                setApprovedMembers(approvedList)
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

    function getParticipantsList (){
        projectData.participants.map((id) => {
            setParticipantsList(prevList => ([...prevList, sampleUserList[id]]))
        })
    }

    const _renderTaskItem = (taskValue) => {
        return(
            <div className={"bg-test-third-gray mb-2"}>

                <p className={"text-sm p-1"}>
                    {taskValue}
                </p>

            </div>
        )
    }

    const _renderMyItem = ( user ) => {
        return(
            <div
                onClick={() => setIsInvitesModalVisible(true)}
                className={"flex items-center w-10/12 rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                <p className={"text-medium font-bold text-test-white p-2"}>
                    {user.user_id}
                </p>

                <div
                    onClick={() => {
                        handleMemberApprove(user.id)
                    }}>
                    <AiFillCheckSquare color={"#b3b3b3"} size={20}/>
                </div>


                <AiFillCloseSquare color={"#b3b3b3"} size={20}/>

            </div>
        )
    }

    const _renderRoleItem = ( ) => {
        return(
            <div
                onClick={() => {
                    // setIsModalOpen(true)
                }}
                className={"flex w-10/12 items-center rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                <p className={"text-medium font-bold text-test-white"}>Front-End Developer</p>

            </div>
        )
    }

    const _renderParticipantItem = (index) => {
        console.log("render part item ! ",index)
        return(
            <div
                onClick={() => {
                    setShowParticipantTasks(true)
                    // setIsModalOpen(true)
                }}
                className={"flex w-10/12 items-center rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                <div className={"mr-2"}>
                    <Avatar alt="ömer" sx={{ width: 50, height: 50 }} src="/static/images/user2.jpg"/>
                </div>

                <div>
                    <p className={"text-medium"}> { participantsList[index].name } </p>
                    <p className={"text-sm"}> { participantsList[index].university } </p>
                </div>

            </div>
        )
    }

    function handleMemberApprove(memberId){
        let requestData = {
            id: memberId
        }

        ApproveMemberRequest(requestData)
            .then((response) => {
                console.log("User added to project !")
            })
    }

    const _renderApprovedItem = ( user ) => {
        return(
            <div
                className={"flex w-10/12 items-center rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                <div className={"mr-2"}>
                    <Avatar alt="ömer" sx={{ width: 50, height: 50 }} src="/static/images/user2.jpg"/>
                </div>

                <div>
                    <p className={"text-medium"}> { user.user_id } </p>
                </div>

            </div>
        )
    }

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Project Detail"}/>

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


                    {/*<div className={"flex items-center font-medium text-xl text-test-white mb-2"}>*/}

                    {/*    /!*<TbSchool color={"#b3b3b3"} size={18}/>*!/*/}

                    {/*    <p>*/}
                    {/*        {projectData.university}*/}
                    {/*    </p>*/}

                    {/*</div>*/}

                    <div className={"flex items-center font-medium text-medium text-test-white"}>

                        <HiOutlineClock color={"#b3b3b3"} size={15}/>

                        <p className={"ml-1"}>
                            {projectData?.created_at}
                        </p>

                    </div>

                </div>

            </div>

            <div className={"flex flex-row w-full p-6"}>

                {/*left side*/}
                <div className={"w-1/4 items-start"}>

                    {
                        userId === projectData?.owner &&
                            <div
                                onClick={() => setIsInvitesModalVisible(true)}
                                className={"flex items-center w-10/12 rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                                <BiEnvelope color={"#b3b3b3"} size={20}/>

                                <p className={"text-medium font-bold text-test-white p-2"}>
                                    Invites
                                </p>

                            </div>
                    }

                    <div
                        onClick={() => handleJoinRequest()}
                        className={"flex items-center w-10/12 rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                        <AiFillCloud color={"#b3b3b3"} size={20}/>

                        <p className={"text-medium font-bold text-test-white p-2"}>
                            Join
                        </p>

                    </div>

                    <div className={"flex items-center w-10/12 rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>

                        <TbListCheck color={"#b3b3b3"} size={20}/>

                        <p className={"text-medium font-bold text-test-white p-2"}>
                            Tasks
                        </p>

                    </div>

                    <p className={"text-medium font-bold text-test-white p-2"}>
                        Roles
                    </p>

                    {/*{*/}
                    {/*    projectData.roles.map((role) => (*/}
                    {/*        <div*/}
                    {/*            key={"1"}*/}
                    {/*            onClick={() => {*/}
                    {/*                setIsApplyModalOpen(true)*/}
                    {/*            }}*/}
                    {/*            className={"flex w-10/12 items-center rounded h-fit bg-test-second-gray p-2 mb-2 hover:bg-test-third-gray"}>*/}

                    {/*            <p className={"text-medium font-bold text-test-white"}> {role} </p>*/}

                    {/*        </div>*/}
                    {/*    ))*/}
                    {/*}*/}

                    <p className={"text-medium font-bold text-test-white p-2"}>
                        Participants
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
                                                onClick={() => setIsModalOpen(true)}
                                                className={"cursor-pointer"}>

                                                <IoIosAddCircle color={"#b3b3b3"} size={25}/>

                                            </div>

                                        </div>

                                        {
                                            todoList.map((task) => (
                                                _renderTaskItem(task)
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

                                            <p className={"text-sm p-1"}>
                                                this is my awesome test task for choosing background color!
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        :

                            <div>
                                <p className={"text-xl font-bold text-test-white mb-4"}>
                                    Project Description
                                </p>

                                <p className={"text-medium font-bold text-test-white mb-4"}>
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
                <div className={"flex flex-col justify-evenly items-center w-2/3 h-1/3 rounded bg-test-second-gray p-3"}>

                    <div className={"text-3xl font-bold text-test-white"}>
                        Join Request
                    </div>

                    {
                        memberList.length > 0 &&

                            memberList?.map((user) => (
                                _renderMyItem(user)
                            ))

                    }

                </div>

            </Modal>

            {/*task modal*/}
            <Modal
                open={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                style={{display:'flex',alignItems:'center',justifyContent:'center'}}
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

            <ApplyRoleModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />

        </div>
    )
}
