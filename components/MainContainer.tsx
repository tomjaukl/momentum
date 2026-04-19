"use client"
import { useState } from "react";


export default function MainContainer({ children} : { children: React.ReactNode}){
    const [ready, setReady] = useState(false);
    if (!ready) {
        return(
            <div className="flex m-auto w-1/2 h-screen bg-white/50 items-center justify-center">
                <button onClick={() => setReady(true)}>Click to Start</button>
            </div>
        )
    }
    return (
        <div className="flex m-auto w-1/2 bg-white/50">
            {children}
        </div>
    )
}