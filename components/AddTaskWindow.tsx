"use client"
import { createPortal } from "react-dom"
import NameSettings from "./NameSettings";
import { X } from "lucide-react";

export default function AddTaskWindow() {
    return createPortal(
        <div className="absolute bg-amber-50 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 h-96 rounded-lg shadow-lg p-4">
            
        </div>,
        document.body
    )
}