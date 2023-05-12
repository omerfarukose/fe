import React from "react";
import Layout from "../components/main/layout";
import {ProjectCard} from "../components/ui/projectCard";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../contexts/UserContext";
import {GetPopularProjectsRequest} from "../adapter/API/request/Project";

export default function Home() {

  // const { userData, setIsLogin } = useContext(UserContext);
  // const [projectList, setProjectList] = useState([]);
  //
  // useEffect(() => {
  //     // get project list
  //     _getPopularProjects()
  //
  //     if(!userData){
  //         setIsLogin(false)
  //     }
  // }, []);
  //
  // const _getPopularProjects = ( ) => {
  //   GetPopularProjectsRequest()
  //       .then((response) => {
  //           setProjectList(response?.data)
  //       })
  //       .catch((error) => {})
  // }

  return (
      <Layout>

          {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">*/}

          <div className={"flex flex-1 items-center justify-center"}>

              <div className="w-2/3">

                  {/* sample project cards */}
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>

              </div>
          </div>


      </Layout>
  )
}
