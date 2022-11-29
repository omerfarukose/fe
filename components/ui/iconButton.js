import Link from "next/link";
import {Tooltip} from "@mui/material";

export default function IconButton(props){

    let { icon, tooltip, href } = props

    return(
        <Tooltip title={tooltip}>

            {
                href ?
                <Link href={href}>
                    <div className={'bg-opacity-40 bg-gray-200 mr-2 items-center justify-center p-2 aspect-square rounded-sm cursor-pointer'}>
                        { icon }
                    </div>
                </Link>
                :
                <div className={'bg-opacity-40 bg-gray-200 mr-2 items-center justify-center p-2 aspect-square rounded-sm cursor-pointer'}>
                    { icon }
                </div>
            }
        </Tooltip>
    )
}
