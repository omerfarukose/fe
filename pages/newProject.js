import Layout from "../components/layout/layout";
import {TextField} from "@mui/material";
import React, {useEffect} from "react";

export default  function NewProject(){

    return(
        <Layout>
            <div className={`flex flex-col w-full h-96 p-8 bg-profile-background h-screen`}>

                {/* name */}
                <TextField id="outlined-basic" label="Proje Adı" variant="outlined"/>
                <div className={"mt-8 w-full bg-red-300"} />

                {/* main category */}
                <TextField id="outlined-basic" label="Ana Kategori" variant="outlined" />
                <div className={"mt-8 w-full bg-red-300"} />

                {/* sub categories */}
                <TextField id="outlined-basic" label="Alt Kategori" variant="outlined" />
                <div className={"mt-8 w-full bg-red-300"} />

                {/* description */}
                <TextField id="outlined-basic" label="Proje Açıklaması" variant="outlined" />
                <div className={"mt-8 w-full bg-red-300"} />

            </div>
        </Layout>
    )
}
