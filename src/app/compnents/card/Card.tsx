import { CardPropsTypes } from "../../../../types/componentstypes";
import Tag from "../tag/Tag";
// var courseTitle : string []= ["Web and Mobile"]
var courseTitle : string = "Web and Mobile"

var count : number = 10;
var countShow: boolean = false;
export default function Card (props:CardPropsTypes) {
  //  true ? "true" : "false"
  if (count > 5) {
    //do this 
    countShow=true
  }
  return (
        <div style = {{backgroundColor: props.showDescription? 'green' : 'red'}}className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md p-6">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">{props.coursTitle} - {props.tag}</h2>
       {/* <p className="text-gray-600">{props.description}</p> */}
       {props.showDescription && <p className="text-gray-600">{props.description}</p>}
       {/* {props.showDescription? <p className="text-gray-600">{props.description}</p> :""} */}
        {/* <p className="text-gray-600">{courseTitle[0]}</p> */}
      </div>
      <div className="flex flex-wrap">
       
         {props.showTag? <Tag tagText={props.tag}/> : "No Tags Available" }   
              
              <span>{props.date}</span>

      </div>
     {/* {count > 5 ? <span>{count}</span> :""}  */}
     {countShow && <span>{count}</span>} 
    </div>
    )
}