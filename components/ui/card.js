export default function Card(props){

    let { title, text } = props

    return(
        <div className={"bg-opacity-50 bg-gray-200 rounded-lg mt-4 mx-4 my-2 flex flex-row"}>

            <div className={"overflow-hidden shadow-xs"}>
                {/* left side */}
                <div>
                    {/* title - subtitle - created at */}
                    <div>

                        {/* title */}
                        <div>
                            Project Title
                        </div>

                        {/* subtitle */}
                        <div>
                            Project subtitle
                        </div>

                        {/* created at */}
                        <div>
                            12:12:2022
                        </div>
                    </div>

                    {/* description */}
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </div>

                    <div>

                        {/* project owner & university */}
                        <div>

                            {/* project owner */}
                            <div>
                                project owner
                            </div>

                            {/* project university */}
                            <div>
                                university
                            </div>

                        </div>

                        {/* project detail */}
                        <div>
                            project detail
                        </div>

                    </div>
                </div>

                {/* right side */}
                <div>
                    test
                </div>
            </div>

            <div className={'bg-white lg:visible'}>

                Right side

            </div>


        </div>
    )
}
