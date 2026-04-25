"use client"
import { createPortal } from "react-dom"
import NameSettings from "./NameSettings";
import { X } from "lucide-react";

export default function SettingsWindow({name, onSave, onClose}: {name: string, onSave: (name: string) => void, onClose: () => void}) {
    return createPortal(
        <div className="absolute bg-amber-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96 rounded-lg shadow-lg p-4">
            <div className="w-full flex justify-end">
                <button className=" bg-red-200 " onClick={onClose}>
                <X/>
                </button>
            </div>
            <div className="bg-gray-300/25 p-2 flex flex-col gap-2">
                <h1 className="text-2xl p-2 text-center bg-yellow-400">Settings</h1>
                <NameSettings name={name} onSave={onSave}/>
            </div>
        </div>,
        document.body
    )
}