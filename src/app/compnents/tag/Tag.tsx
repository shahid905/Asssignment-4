import { TagPropsTypes } from "../../../../types/componentstypes";

export default function Tag (props:TagPropsTypes){
    return(
        <span
            className="bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-2 mb-2"
          >
           {props.tagText}
          </span>
    )
}