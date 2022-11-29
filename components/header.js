import Button from "./ui/button";

export  default function Header(){

    return(
        <div className={"w-full px-40 flex py-24"}>

            {/* left view */}
            <div className={"basis-1/2 pr-40 flex flex-col justify-evenly"}>

                <div>
                    <p className={"text-white text-5xl"}>Kendine bir</p>
                    <p className={"text-white text-5xl"}>proje bul</p>
                </div>

                <div>
                    <p className={"text-white font-base"}>Ekosisteme dair her türlü bilgiye ulaşmana yardımcı olmak için bir araya gelen topluluk : unipo</p>
                </div>

                <div className={"items-start w- justify-between flex w-full"}>
                    <div className={'bg-white items-center w-36 justify-center p-3 px-5 rounded-md cursor-pointer'}>
                        <p className={'text-purple-color font-medium text-sm text-center'}> Proje Ara </p>
                    </div>
                    <div className={'bg-blue-400 w-36 items-center justify-center p-3 px-5 rounded-md cursor-pointer'}>
                        <p className={'text-white font-base text-sm text-center '}> Proje Oluştur </p>
                    </div>
                </div>

            </div>

            {/* right view */}
            <div className={"basis-1/2 flex flex-row flex flex-row"}>

                <div className={"w-2/5 flex m-2.5 items-center"}>

                    <img className={"w-64 rounded-xl"} src="images/header/left.png"/>

                </div>

                <div className={"w-2/5 justify-evenly"}>
                    <div>
                        <img className={"object-contain m-2.5 w-64 rounded-xl"} src="images/header/right-1.png"/>
                    </div>

                    <div>
                        <img className={"object-contain rounded-xl m-2.5 w-64"} src="images/header/right-2.png"/>
                    </div>
                </div>

            </div>

        </div>
    )
}
