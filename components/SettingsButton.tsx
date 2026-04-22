"use client"
import Settings from "./SettingsWindow";
import { Settings2, X } from 'lucide-react'
import { useState} from 'react';
import SettingsWindow from "./SettingsWindow";

export default function SettingsButton() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <button className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <Settings2 />
            </button>
            { isOpen && (
                <SettingsWindow />
            )}
        </div>
    )
}  