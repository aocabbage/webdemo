"use client"

import Image from "next/image";
import InformationPopup from "../components/InformationPopup";

import pesto from "../src/Images/pesto.jpg";
import timmy from "../src/Images/tiger.jpg";
import roddy from "../src/Images/rat.jpeg";
import { useState } from 'react';

export default function Home() {

  const [renderMode, setRenderMode] = useState(0)

  const handleChildClose = () => {
    setRenderMode(0);
  };

  return(
  <div className="absolute w-screen h-screen top-0">
    <div className="h-full w-full justify-center overflow-hidden bg-gray-50">
      <div className="relative flex flex-row justify-evenly pb-10 pt-10 mx-auto mt-24 overflow-hidden">
        <MyImage onClick={() => setRenderMode(3)} url={pesto} alt="pesto the penguin"/>
        <MyImage onClick={() => setRenderMode(1)} url={timmy} alt="timmy the tiger"/>
        <MyImage onClick={() => setRenderMode(2)} url={roddy} alt="roddy the rat"/>
      </div>
    </div>
    {(renderMode==1) && <InformationPopup handleClose={handleChildClose} Title="Bengal Tiger" Description="The tiger (Panthera tigris) is a large cat and a member of the genus Panthera native to Asia. It has a powerful, muscular body with a large head and paws, a long tail and orange fur with black, mostly vertical stripes. It is traditionally classified into nine recent subspecies, though some recognise only two subspecies, mainland Asian tigers and the island tigers of the Sunda Islands."/>} 
    {(renderMode==2) && <InformationPopup handleClose={handleChildClose} Title="Brown Rat" Description="The brown rat (Rattus norvegicus), also known as the common rat, street rat, sewer rat, wharf rat, Hanover rat, Norway rat and Norwegian rat, is a widespread species of common rat. One of the largest muroids, it is a brown or grey rodent with a body length of up to 28 cm (11 in) long, and a tail slightly shorter than that. It weighs between 140 and 500 g (4.9 and 17.6 oz). Thought to have originated in northern China and neighbouring areas, this rodent has now spread to all continents except Antarctica, and is the dominant rat in Europe and much of North America. With rare exceptions, the brown rat lives wherever humans live, particularly in urban areas."/>} 
    {(renderMode==3) && <InformationPopup handleClose={handleChildClose} Title="King Penguin" Description="Penguins are a group of aquatic flightless birds from the family Spheniscidae (/sfɪˈnɪsɪdiː, -daɪ/) of the order Sphenisciformes (/sfɪˈnɪsəfɔːrmiːz/).[4] They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the ocean water, penguins have countershaded dark and white plumage and flippers for swimming. Most penguins feed on krill, fish, squid and other forms of sea life which they catch with their bills and swallow whole while swimming. A penguin has a spiny tongue and powerful jaws to grip slippery prey.[5]"/>} 
  </div>
  )
}

function MyImage({ url, alt, onClick}) {
  return (
    <div onClick={onClick} className="relative rounded-lg shadow-xl ring-1 ring-gray-900/5 w-[30%] cursor-pointer hover:-translate-y-5 duration-300">
      <Image 
      src={url}
      alt={alt} 
      placeholder="blur"
      className="rounded-lg"
      style={{ width: '100%', height: '100%', objectFit : 'cover'}}
      />
    </div>)
  }