import React, {useContext, useState} from "react";
import {BackButton} from "../ui/BackButton";
import {Avatar} from "@mui/material";
import {FiSearch} from "react-icons/fi";
import {LayoutContext} from "../../contexts/LayoutContext";

export default function SearchContent (props) {

    const [searchText, setSearchText] = useState("");
    let { setContentType, setSelectedUniversity } = useContext(LayoutContext);


    const _renderUniCard = ( logo, title, id ) => {
        return(
            <div
                onClick={() => {
                    setSelectedUniversity(id)
                    setContentType(7)
                }}
                className={"w-36 bg-test-second-gray h-48 flex flex-col items-center justify-evenly rounded cursor-pointer hover:bg-test-third-gray"}>

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

            <div className={"grid grid-cols-6 place-items-center gap-4"}>

                { _renderUniCard("pau-logo.png", "PAÜ", 1)}
                { _renderUniCard("marmara-logo.png", "MÜ", 2)}
                { _renderUniCard("ege-logo.png", "EGE", 3)}
                { _renderUniCard("akdeniz-logo.jpeg", "AKDÜ", 4)}
                { _renderUniCard("yildiz-logo.png", "YTÜ", 5)}
                {/*{ _renderUniCard("itu-logo.jpeg", "İTÜ")}*/}
                {/*{ _renderUniCard("hacettepe-logo.png", "HÜ")}*/}
                {/*{ _renderUniCard("odtu-logo.jpeg", "ODTU")}*/}
                {/*{ _renderUniCard("bogazici-logo.jpeg", "BOUN")}*/}
                {/*{ _renderUniCard("bau-logo.jpeg", "BAU")}*/}
                {/*{ _renderUniCard("bilkent-logo.png", "BILKENT")}*/}
                {/*{ _renderUniCard("dokuz-logo.jpeg", "DEÜ")}*/}
                {/*{ _renderUniCard("katu-logo.png", "KATÜ")}*/}
                {/*{ _renderUniCard("koc-logo.png", "KOÇ")}*/}
                {/*{ _renderUniCard("msk-logo.png", "MSKÜ")}*/}
                {/*{ _renderUniCard("ohu-logo.png", "ÖHÜ")}*/}
                {/*{ _renderUniCard("beykent-logo.png", "BEYKENT")}*/}

            </div>


        </div>
    )
}
