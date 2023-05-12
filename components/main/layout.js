import {useContext} from "react";
import {UserContext} from "../../contexts/UserContext";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Footer from "./footer";
import {LayoutContext} from "../../contexts/LayoutContext";
import Testbar from "./testbar";

export default function Layout (props) {

    let {children, sidebar=true, footer=true, navbar=true, navbarItems=true} = props;

    let { isSidebarOpen, isLogin } = useContext(LayoutContext);

    return(
        <div className={'min-h-screen min-w-screen flex flex-col flex-auto flex-shrink-0 bg-test-body'}>

            {
                navbar &&
                <Navbar navbarItems={navbarItems}/>
            }

            {
                sidebar &&
                <Testbar/>
            }

            <main className={`${sidebar ? isSidebarOpen ? "ml-64" : "ml-20 " : "ml-0"} duration-500 mt-12 min-h-screen`}>
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
