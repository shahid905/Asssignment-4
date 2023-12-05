import Button from "./compnents/button/Button";
import Card from "./compnents/card/Card";
import Tag from "./compnents/tag/Tag";

export default function Home () {
  return(
    <div>
      <h1>
        Home Page
      </h1>
      {5==5  && 
      <Card  showDescription={false} showTag = {true} coursTitle="Web and Mobile" tag="web" description="A web and mobile course description" date="06.12.2023"/>}
      <Button title="Apply"/>
      <br/>
      <Button title="Add+"/>
      <Card showDescription={true} coursTitle="Blockchain Developement" tag="blockchain" description="A blockchain course" date="04.12.2023"/>


    </div>
  )
}