"use client"
import AllTasks from "./AllTasks";
import AddTaskButton from "./AddTaskButton";
import { Task } from "@/lib/Task";

export default function Tasks({addTask, tasks, removeTask}: {
    addTask: (content: string, timeToComplete: number) => void, 
    tasks: Task[],
    removeTask: (index: number) => void}){

    console.log(typeof removeTask)
    return (
        <div className="mt-4 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
            <div>
                <h1 className="text-2xl text-center">Tasks</h1>
                <AddTaskButton addTask={addTask} />
                <AllTasks tasks={tasks} removeTask={removeTask} />
            </div>
        </div>
    )
}