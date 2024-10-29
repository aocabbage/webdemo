"use client"

import Image from "next/image";
import InformationPopup from "../../components/InformationPopup";

import pesto from "../../src/Images/pesto.jpg";
import timmy from "../../src/Images/tiger.jpg";
import roddy from "../../src/Images/rat.jpeg";
import { useState } from 'react';

export default function Home() {

  const [renderMode, setRenderMode] = useState(0)

  const handleChildClose = () => {
    setRenderMode(0);
  };

  return(
  <>
    <div className="h-full w-full justify-center overflow-hidden bg-primary-50 mt-20 sm:mt-24">
      <div className="relative flex flex-col sm:flex-row justify-evenly mx-auto overflow-hidden">
        <MyImage onClick={() => setRenderMode(3)} url={pesto} alt="pesto the penguin"/>
        <MyImage onClick={() => setRenderMode(1)} url={timmy} alt="timmy the tiger"/>
        <MyImage onClick={() => setRenderMode(2)} url={roddy} alt="roddy the rat"/>
      </div>
    </div>
    {(renderMode==1) && <InformationPopup handleClose={handleChildClose} Title="Bengal Tiger" Description="The Bengal tiger is a population of the Panthera tigris tigris subspecies and the nominate tiger subspecies. It ranks among the biggest wild cats alive today. It is estimated to have been present in the Indian subcontinent since the Late Pleistocene for about 12,000 to 16,500 years. Its historical range covered the Indus River valley until the early 19th century, almost all of India, western Pakistan, southern Nepal, Bangladesh, Bhutan and southwestern China. Today, it inhabits India, Bangladesh, Nepal, Bhutan, and southwestern China. It is threatened by poaching, habitat loss and habitat fragmentation."/>} 
    {(renderMode==2) && <InformationPopup handleClose={handleChildClose} Title="Brown Rat" Description="The brown rat (Rattus norvegicus), also known as the common rat, street rat, sewer rat, wharf rat, Hanover rat, Norway rat and Norwegian rat, is a widespread species of common rat. One of the largest muroids, it is a brown or grey rodent with a body length of up to 28 cm (11 in) long, and a tail slightly shorter than that. It weighs between 140 and 500 g (4.9 and 17.6 oz). Thought to have originated in northern China and neighbouring areas, this rodent has now spread to all continents except Antarctica, and is the dominant rat in Europe and much of North America. With rare exceptions, the brown rat lives wherever humans live, particularly in urban areas."/>} 
    {(renderMode==3) && <InformationPopup handleClose={handleChildClose} Title="King Penguin" Description="The king penguin (Aptenodytes patagonicus) is the second largest species of penguin, smaller, but somewhat similar in appearance to the emperor penguin. There are two subspecies, A. p. patagonicus and A. p. halli; patagonicus is found in the South Atlantic and halli in the South Indian Ocean (at the Kerguelen Islands, Crozet Island, Prince Edward Islands, and Heard Island and McDonald Islands) and at Macquarie Island.[1]"/>} 
  </>
  )
}

function MyImage({ url, alt, onClick}) {
  return (
    <div onClick={onClick} className="border border-secondary-600 mx-[5%] sm:mx-0 my-6 relative rounded-lg shadow-xl ring-1 ring-secondary-900/5 w-[90%] sm:w-[30%] cursor-pointer hover:-translate-y-5 duration-300">
      <Image 
      src={url}
      alt={alt} 
      placeholder="blur"
      className="rounded-lg"
      style={{ width: '100%', height: '100%', objectFit : 'cover'}}
      />
    </div>)
  }