"use client"
import { useState } from "react";


export default function MainContainer({ children} : { children: React.ReactNode}){
    const [ready, setReady] = useState(false);
    return (
        <div className="flex m-auto w-2/3 max-w-420 bg-white/10 rounded-lg p-4 mt-4 backdrop-blur-sm">
            {children}
        </div>
    )
}