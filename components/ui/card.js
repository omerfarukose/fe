import {sampleProjectCardData as sampleData} from "../../values/SampleData";

export default function Card(props){

    return(
        <div className={"flex flex-row h-80 rounded-lg m-4 bg-white cursor-pointer drop-shadow-2xl"}>

                {/* left side */}
                <div className={`flex flex-col flex-1`}>

                    {/* left title */}
                    <div className={`rounded-tl-lg p-2 text-gray-700 font-bold`}>
                        <p>
                            { sampleData.name }
                        </p>
                    </div>

                    {/*left body*/}
                    <div className={`flex flex-1 flex-col`}>

                        {/* description */}
                        <div className={`text-gray-700 flex flex-1 p-2`}>
                            <p>
                                { sampleData.description }
                            </p>
                        </div>

                        {/* project university */}
                        <div className={`text-gray-700 font-bold p-2 rounded-bl-lg`}>
                            <p>
                                { sampleData.university }
                            </p>
                        </div>

                    </div>

            </div>

            {/*right view*/}
            <div className={'flex flex-col bg-tartOrange lg:visible w-48 rounded-tr-lg rounded-br-lg'}>

                <div className={`flex flex-1 items-center justify-center`}>
                    tag view
                </div>

                {/* project owner */}
                <div className={`text-white flex flex-col items-center justify-center`}>
                    <p>
                        { sampleData.owner }
                    </p>

                    <p>
                        { sampleData.createdAt }
                    </p>
                </div>

            </div>

        </div>
    )
}
