export const MyButton = ( props ) => {

    let { onButtonClick, containerStyle, textStyle } = props

    return(
        <div
            onClick={() => onButtonClick}>

        </div>
    )
}
