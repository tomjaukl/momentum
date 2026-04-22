"use client"
import { createPortal } from "react-dom"

export default function SettingsWindow() {
    return createPortal(
        <div className="absolute bg-amber-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96 rounded-lg shadow-lg p-4">
            <div className="bg-gray-300/25 p-2">
                <h1 className="text-2xl">Settings</h1>
            </div>
        </div>,
        document.body
    )
}