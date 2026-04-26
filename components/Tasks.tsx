"use client"
import { Plus } from "lucide-react"
import useTasks from "@/hooks/useTasks";
import AddTaskButton from "./AddTaskButton";

export default function Tasks() {
    const { tasks, addTask } = useTasks();
    console.log(tasks)
    const dummycontent = "finishing this damn task component"
    return (
        <div className="mt-4 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
            <div>
                <h1 className="text-2xl text-center">Tasks</h1>
                <AddTaskButton/>
            </div>
        </div>
    )
}