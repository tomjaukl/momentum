"use client"
import { createPortal } from "react-dom"
import NameSettings from "./NameSettings";
import { X } from "lucide-react";

export default function SettingsWindow({name, onSave, onClose, onClearTasks}: {name: string, onSave: (name: string) => void, onClose: () => void, onClearTasks: () => void}) {
    return createPortal(
        <div className="absolute bg-blue-600 backdrop-blur-md transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 border border-white/20 rounded-lg shadow-lg p-4 flex flex-col gap-2">
            <div className="w-full flex justify-end">
                <button className="text-red-500 hover:text-red-700 cursor-pointer" onClick={onClose}>
                <X/>
                </button>
            </div>
            <div className="bg-gray-300/60 rounded-md p-2 flex flex-col gap-2">
                <h1 className="text-2xl p-2 text-center">Settings</h1>
                <NameSettings name={name} onSave={onSave}/>
                <button className="rounded-md bg-white/20 p-2 border-2  hover:bg-red-300/60 cursor-pointer" onClick={onClearTasks}>
                    Reset Tasks
                </button>
            </div>
        </div>,
        document.body
    )
}