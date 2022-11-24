import Button from "./ui/button";

export default function Navbar() {
    let katil = "Discord'a Katıl"
    return(
        <div className={'bg-main-color w-100 h-24 px-40 flex items-center justify-between border-b border-footer-background'}>

            {/* logo */}
            <div className={'basis-1/4 cursor-pointer flex items-center justify-start'}>

                <img
                    src="images/logo/logo.png"
                    className={`w-14`}/>

                <p
                    className={'text-white font-sans text-xl'}
                    style={{fontFamily: 'Inter',fontWeight: 500}}> Frontend </p>
                <p
                    className={'text-white font-sans text-xl'}
                    style={{fontFamily: 'Inter',fontWeight: 100}}> ship </p>

            </div>

            {/* nav items */}
            <div className={'basis-1/2 flex items-center justify-start pl-5'}>
                <div>
                    <p className={'text-gray-300 mr-2 text-sm'}>
                        Anasayfa
                    </p>
                </div>
                <div>
                    <p className={'text-gray-300 text-navbar-gray mr-2 text-sm'}>
                        Discord
                    </p>
                </div>
                <div>
                    <p className={'text-gray-300 text-navbar-gray mr-2 text-sm'}>
                        Blog
                    </p>
                </div>
                <div>
                    <p className={'text-gray-300 text-navbar-gray mr-2 text-sm'}>
                        Etkinlikler
                    </p>
                </div>

                <style jsx>{`
                    p {
                       margin-right: 35px;
                    }
                `}</style>

            </div>

            {/* join us button */}
            <div className={'basis-1/4 flex items-center justify-end'}>
                <Button text={"Discord'a Katıl"}/>
            </div>

        </div>
    )
}
