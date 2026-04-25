"use client"
import Settings from "./SettingsWindow";
import { Settings2, X } from 'lucide-react'
import { useState} from 'react';
import SettingsWindow from "./SettingsWindow";

export default function SettingsButton({name, onSave}: {name:string,onSave:(name: string) => void}) {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <button className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <Settings2 />
            </button>
            { isOpen && (
                <SettingsWindow name={name} onSave={onSave} onClose={() => setIsOpen(false)} />
            )}
        </div>
    )
}  