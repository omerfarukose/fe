import React, {useState} from "react";
import {BackButton} from "../ui/BackButton";
import {Avatar} from "@mui/material";
import {FiSearch} from "react-icons/fi";

export default function SearchContent (props) {

    const [searchText, setSearchText] = useState("");

    const _renderUniCard = ( logo, title ) => {
        return(
            <div className={"w-36 bg-test-second-gray h-48 flex flex-col items-center justify-evenly rounded cursor-pointer hover:bg-test-third-gray"}>

                <div className={"border border-2 border-white rounded-full"}>
                    <Avatar sx={{ width: 80, height: 80 }} alt="Remy Sharp" src={"/static/uni-logo/" + logo} />
                </div>

                <p className={"text-xl font-bold"}>
                    {title}
                </p>
            </div>
        )
    }

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Search"}/>

            <div className={"flex items-center p-3 w-full mb-6"}>

                <div className={"mx-3"}>
                    <FiSearch color={"#b3b3b3"} size={30}/>
                </div>

                <input
                    type={"1"}
                    id={"1"}
                    value={searchText}
                    spellCheck={false}
                    placeholder={"Search for university, project, student..."}
                    onChange={ e => setSearchText(e.target.value)}
                    className="w-full bg-test-white rounded p-2 text-test-gray placeholder-gray-500"
                    required/>

            </div>



            <div className={"grid grid-cols-6 place-items-center gap-4"}>

                { _renderUniCard("pau-logo.png", "PAÜ")}
                { _renderUniCard("hacettepe-logo.png", "HÜ")}
                { _renderUniCard("itu-logo.jpeg", "İTÜ")}
                { _renderUniCard("marmara-logo.png", "MÜ")}
                { _renderUniCard("odtu-logo.jpeg", "ODTU")}
                { _renderUniCard("yildiz-logo.png", "YTÜ")}
                { _renderUniCard("bogazici-logo.jpeg", "BOUN")}
                { _renderUniCard("ege-logo.png", "EGE")}
                { _renderUniCard("akdeniz-logo.jpeg", "AKDÜ")}
                { _renderUniCard("bau-logo.jpeg", "BAU")}
                { _renderUniCard("bilkent-logo.png", "BILKENT")}
                { _renderUniCard("dokuz-logo.jpeg", "DEÜ")}
                { _renderUniCard("katu-logo.png", "KATÜ")}
                { _renderUniCard("koc-logo.png", "KOÇ")}
                { _renderUniCard("msk-logo.png", "MSKÜ")}
                { _renderUniCard("ohu-logo.png", "ÖHÜ")}
                { _renderUniCard("beykent-logo.png", "BEYKENT")}

            </div>


        </div>
    )
}
