export default function Card(props){

    let { title, text } = props

    return(
        <div className={"bg-test-bg rounded-md p-12 my-12 drop-shadow"}>

            <div>
                <img
                    src="images/logo.png"
                    className={`w-14`}/>
            </div>

            <p className={"text-main-color text-lg my-4"}>{title}</p>

            <p className={"text-card-text text-md font-thin"}>{text}</p>

        </div>
    )
}
