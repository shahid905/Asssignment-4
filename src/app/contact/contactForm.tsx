"use client"
import Button from "../compnents/button/Button";

export default function ContactForm() {
//   const onClickHandler = () => {
//     alert("Click Contact Form")
  
    return (
    <Button  title="Contact me" onClickhandler={()=>alert("onclick by contact page")}/>
  )
}
