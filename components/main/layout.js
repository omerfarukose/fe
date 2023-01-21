import {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout (props) {

    let {children, sidebar=true, footer=true, navbar=true, navbarItems=true} = props;

    let { isSidebarOpen, isLogin } = useContext(UserContext);

    return(
        <div className={'min-h-screen min-w-screen flex flex-col flex-auto flex-shrink-0 bg-body'}>

            {
                navbar &&
                <Navbar navbarItems={navbarItems}/>
            }

            {
                sidebar &&
                <Sidebar/>
            }

            <main className={`${sidebar ? isSidebarOpen ? "ml-64" : "ml-20 " : "ml-0"} duration-300 mt-16 min-h-screen`}>
                {children}
            </main>

            {
                footer &&
                <Footer/>
            }

            <style global jsx>{`
                body {
                   font-family: 'Inter';
                }
            `}</style>
        </div>
    )
}
