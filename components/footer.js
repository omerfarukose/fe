export default function Footer(){

    return(
        <div className={'flex w-full h-48 items-center bg-gradient-to-r from-indigo-500 to-blue-400'}>

            {/* logo */}
            <div className={'flex-1 text-white font-sans text-xl text-center justify-center opacity-50'} style={{fontFamily: 'Inter',fontWeight: 500}}>
                unipo.
            </div>

            {/**/}
            <div className={'flex-1 text-white font-sans text-xl justify-center text-center opacity-50'} >
                info@unipo.com
            </div>
        </div>
    )
}
