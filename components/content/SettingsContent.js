import React from "react";
import {BackButton} from "../ui/BackButton";

export default function SettingsContent (props) {

    return(
        <div className="flex flex-1 flex-col bg-test-gray w-full mx-3 mb-3 rounded">

            <BackButton title={"Settings"}/>

            <div className={"font-bold text-2xl p-8 pt-2"}>
                Settings
            </div>

        </div>
    )
}
