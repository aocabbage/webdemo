"use client"

import { LoginContainer } from "../components/Container";
import { useState } from 'react';

// Actions
import { login } from "../actions/user-system";
const data = "app/src/Data/loginData";

export default function Home() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="mt-28 sm:mt-32">
            <LoginContainer style="mx-0 sm:mx-[20vw] w-full sm:w-[60vw] text-center p-12">
                <div className="flex flex-col space-y-4 w-1/2 mx-[25%]">
                    <input value={username} onChange={e => setUsername(e.target.value)} className="border border-secondary-600" placeholder="Username" name="username"/>
                    <input value={password} onChange={e => setPassword(e.target.value)} className="border border-secondary-600" type="password" placeholder="Password" name="password"/>
                    <button className="w-1/2 mx-[25%] border rounded-full border-secondary-600 text-secondary-600 bg-primary-50 hover:bg-secondary-600 hover:text-primary-50 duration-300"onClick={() => login(username, password, data)}>Submit</button>
                </div>
            </LoginContainer>
        </div>
    )
}