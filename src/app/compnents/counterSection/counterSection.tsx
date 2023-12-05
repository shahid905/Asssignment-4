"use client"
import { useState } from "react";
import Button from "../button/Button"
export default function CounterSection() {
  // var count:number = 0;
  // const [countState, setCountState] = useState (0)
  const adminList = ['Shahid' , 'Abdullah' , 'Zaid' , 'Ahmed' , 'Ibrahim']

  const [nameState,setnameState] = useState(0) 
  // const [isStatus, setIstStatus] = useState(false)
  // const [email, setEmail] = useState("")
  // const [student, setStudent] = useState({rollNo:2234, name:"Abdullah"})
 
  // const onClickAddHandler = ()=>{
  //     count = count + 1
  //     setCountState(countState + 1)
  //     console.log("count in add onClickAddHandler", count)
  // }

  // const onClickMinusHandler = ()=>{
  //   count = count - 1
  //   setCountState(countState -  1)
  //   console.log("count in Minus onClickMinusHandler", count)

  // }

  const nameNextHandler = () => {
    setnameState ((prevIndex) => (prevIndex + 1) % adminList.length);
}

 const namePreviousHandler = () => {
    setnameState ((prevIndex) => prevIndex === 0 ? adminList.length - 1 : prevIndex - 1)
}
//   const resetHandler = ()=>{
//     setCountState(0)

 // }
  return (
    <div>
      <Button title ="+" onClickhandler={namePreviousHandler}/> 
      <span>{adminList[nameState]}</span>
      <Button title ="-" onClickhandler={nameNextHandler}/> 
    <br/>
    {/* <Button title = "Reset" onClickhandler={resetHandler}/> */}
    {/* <Button title ="Name" onClickhandler={onClickNames} /> */}
    </div>
 )
}
