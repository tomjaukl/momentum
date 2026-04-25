"use client"
import { useState } from "react";


export default function MainContainer({ children} : { children: React.ReactNode}){
    const [ready, setReady] = useState(false);
    return (
        <div className="flex w-full max-w-7xl mx-auto px-4 bg-white/10 rounded-lg p-4 mt-4 backdrop-blur-sm">
            {children}
        </div>
    )
}