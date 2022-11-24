export default function Button(props){

    let { text, theme="light",containerStyle, textStyle, classList } = props;

    return theme === "light" ?
        (
            <div style={{...containerStyle}} className={'bg-white items-center justify-center p-2 px-5 rounded-md cursor-pointer'}>
                <p className={'text-main-color font-medium text-sm text-center'}> {text} </p>
            </div>
        )
        :
        (
            <div style={{...containerStyle}} className={'bg-main-color w-36 items-center justify-center p-2 px-5 border border-header rounded-md cursor-pointer'}>
                <p className={'text-white font-base text-sm text-center '}> {text} </p>
            </div>
        )
}
