"use client"

import { useEffect, useState } from "react";
import notes from "./notes.json";
import { current } from "tailwindcss/colors";

export default function Home() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});
    const [mouseState, setMouseState] = useState(false);

    const handleMouseMove = (event) => {
        setMousePosition({ x: event.clientX, y: event.clientY});
    };

    const handleMouseClick = (x) => {
        setMouseState(x);
    };

    return(
    <div onMouseMove={handleMouseMove} onMouseDown={() => handleMouseClick(true)} onMouseUp={() => handleMouseClick(false)} className="mt-28 sm:mt-32 w-screen h-screen">
        <ul>
            {notes.map((content) => (
                <Window key={content.id} y={content.y} x={content.x} title="Sitcky Note" mouseX={mousePosition.x} mouseY={mousePosition.y} mouse0={mouseState} article={content.content}/>
            ))}
        </ul>
    </div>)
}

function Window({article, title, x, y, mouseX, mouseY, mouse0}) {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});
    const [mouseState, setMouseState] = useState(false);

    const [offsetPosition, setOffset] = useState({x: 0, y: 0});

    const [notePosition, setNotePosition] = useState({x: x, y: y});
    const [noteState, setNoteState] = useState(false);

    useEffect(() => {
        setMousePosition({x: mouseX, y: mouseY})
        if(noteState) {
            setNotePosition({x: mousePosition.x + offsetPosition.x, y: mousePosition.y + offsetPosition.y});
        }
    }, [mouseX, mouseY])

    useEffect(() => {
        setMouseState(mouse0);
        if(noteState) {
            setNoteState(mouse0);
        }
        setOffset({x: notePosition.x - mousePosition.x, y: notePosition.y - mousePosition.y});
    }, [mouse0])

    return (
        <div style={{overflow: 'hidden', borderRadius : '10px', top : notePosition.y+"px", left: notePosition.x+"px", width : 'auto', height : 'auto', position : 'absolute'}} id="body">
            <div onMouseDown={() => setNoteState(true)} onMouseUp={() => setNoteState(false)} style={{cursor: "grab", width : '100%', height : '30px', backgroundColor: 'rgb(240, 240, 80)', paddingTop: '3px', paddingLeft: '5px', userSelect: 'none'}} id="titlebar">
                {title}
            </div>
            <div style={{ width : '220px', height : '200px', backgroundColor: 'rgb(255, 255, 80)', padding: '10px'}} id="content">
                <textarea  style={{resize: 'none', height: '180px'}} defaultValue={article}></textarea>
            </div>
            <div style={{width : '100%', height : '18px', backgroundColor: 'rgb(255, 255, 120)', fontSize: '10pt', userSelect: 'none'}}>
                <p>{notePosition.x}, {notePosition.y}, {noteState && "true"} :: {mousePosition.x}, {mousePosition.y}, {mouseState && "true"} </p>
            </div>
        </div>
    )
}