export default function Footer(){

    return(
        <div className={'flex w-full h-48 bg-purple-color items-center'}>

            {/* logo */}
            <div className={'flex-1 text-white font-sans text-xl text-center justify-center '} style={{fontFamily: 'Inter',fontWeight: 500}}>
                unipo.
            </div>

            {/**/}
            <div className={'flex-1 text-white font-sans text-xl justify-center text-center'} >
                info@unipo.com
            </div>
        </div>
    )
}
