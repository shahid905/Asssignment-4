
// type ButtonProps = {
//     title : string
// }
"use client"
import { ButtonProps } from "../../../../types/componentstypes";
var count:number = 1;
function Button (props:ButtonProps) {
    // console.log("props" , props)
    return(
       
        // <button onClick={()=>alert("click")}>{props.title}</button>
        //  <button onClick = {()alert("Clicked")}>{props.onClickHandler} style={{backgroundColor:"green"}}>
        //     Add me
        // </button> 

        // <button onClick={()=>alert("Click Me")}>{props.title}</button>
        <button onClick={props.onClickhandler}>{props.title}</button>
    )
}

export default Button;