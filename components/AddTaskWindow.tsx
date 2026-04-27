"use client"
import { createPortal } from "react-dom"
import NameSettings from "./NameSettings";
import { X } from "lucide-react";
import { useState} from "react"
import { Task } from "@/lib/Task";
import useTasks from "@/hooks/useTasks";


export default function AddTaskWindow({onClose, addTask}: {
    onClose: () => void, 
    addTask: (content: string, timeToComplete: number) => void}) {
    
    
    // const {debuglog} = useTasks();
    const [content, setContent] = useState('');
    const [timeToComplete, setTimeToComplete] = useState('');

    function handleSubmit() {
        if (!content || !timeToComplete) return;
        addTask(content, new Date(timeToComplete).getTime());
        onClose();
    }

    return createPortal(
        <div className="absolute bg-white-50 backdrop-blur-2xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96 border border-white/20 rounded-lg shadow-lg p-4 flex flex-col gap-2">
            <div className="flex justify-end">
                <button className="border border-white/20 rounded-md cursor-pointer hover:bg-red-500/70" onClick={onClose}>
                    <X/>
                </button>
            </div>
            <textarea 
                placeholder="What to do" 
                className="bg-white/20 h-30 p-2 rounded-md"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <input 
                type="datetime-local" 
                className="bg-white/20 p-2 rounded-md"
                value={timeToComplete}
                onChange={(e) => setTimeToComplete(e.target.value)}
            />
            <input 
                type="submit" 
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                value="Add Task"
                onClick={handleSubmit}
            />
        </div>,
        document.body
    )
}