"use client"

import TextContainer from "@/app/components/Container";
import { useState } from "react";

export default function Home() {

    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");


    const handleMessage = (e) => {
        setMessage(e.currentTarget.value);
    }
    const handleSubject = (e) => {
        setSubject(e.currentTarget.value);
    }
    const handleName = (e) => {
        setName(e.currentTarget.value);
    }

    const sendMail = () => {

        let link = `mailto:acabbage@uw.edu&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message+'\n\nSincerely,\n'+name)}`;
        setMessage(link);
        window.open(link);

        return false;
    }

    return(
        <div className="mt-28 mb-12 sm:mt-32 w-screen">
            <TextContainer style="mx-[30%] text-center" title="Contact" text="Student at the University of Washington">
                <div className="mx-[0%] flex-col flex w-[100%] space-y-4">
                    <input value={name} onChange={handleName} className="duration-300 mx-auto border border-black rounded-xl p-[5px]" placeholder="Name" type="text" ></input>
                    <input value={subject} className="duration-300 mx-auto border border-black rounded-xl p-[5px]" placeholder="Subject" type="text" onChange={handleSubject}></input>
                    <textarea onChange={handleMessage} value={message} className="duration-300 mx-auto border border-black rounded-xl p-[5px] w-full h-[200px] resize-none" placeholder="Message" type="text" name="message"></textarea>
                    <button onClick={sendMail} className="duration-300 mx-auto border border-secondary-600 hover:bg-secondary-600 bg-primary-50 hover:text-primary-50 w-[60%] p-[5px] rounded-xl">Submit</button>
                </div>
            </TextContainer>
        </div>
    )
}