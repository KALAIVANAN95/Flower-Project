import React from "react";
import './index.css';
import Flower from "./Components/Flower";

const App=() =>{
  return(
<>

<h1>About Flowers</h1>
<div className="container">


<Flower
title="Rose"
imgsrc="https://images.pexels.com/photos/462402/pexels-photo-462402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
desc="Content is information produced and directed at an end-user or audience in the sectors of publishing, art, and communication. Content is delivered via different media, including the Internet, cinema, television, radio, audio CDs, books and magazines, physical art, and during live events"
btn="Read More"
/>

<Flower
title="Lillies"
imgsrc="https://images.pexels.com/photos/65031/pexels-photo-65031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
desc="Content is information produced and directed at an end-user or audience in the sectors of publishing, art, and communication. Content is delivered via different media, including the Internet, cinema, television, radio, audio CDs, books and magazines, physical art, and during live events"
btn="Read More"


/>

<Flower 

title="SunFlower"
imgsrc="https://images.pexels.com/photos/1287124/pexels-photo-1287124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
desc="Content is information produced and directed at an end-user or audience in the sectors of publishing, art, and communication. Content is delivered via different media, including the Internet, cinema, television, radio, audio CDs, books and magazines, physical art, and during live events"
btn="Read More"
/>


<Flower 

title="Lotus"
imgsrc="https://images.pexels.com/photos/2302908/pexels-photo-2302908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
desc="Content is information produced and directed at an end-user or audience in the sectors of publishing, art, and communication. Content is delivered via different media, including the Internet, cinema, television, radio, audio CDs, books and magazines, physical art, and during live events"
btn="Read More"
/>

<Flower 

title="Red Rose"
imgsrc="https://images.pexels.com/photos/136255/pexels-photo-136255.jpeg?auto=compress&cs=tinysrgb&w=600"
desc="Content is information produced and directed at an end-user or audience in the sectors of publishing, art, and communication. Content is delivered via different media, including the Internet, cinema, television, radio, audio CDs, books and magazines, physical art, and during live events"
btn="Read More"
/>

</div>

</>

  )
}


export default App;