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
        <div className="relative mt-4 p-4  rounded-lg bg-white">
                <h1 className="text-3xl p-5 text-center">Tasks</h1>
                <AddTaskButton addTask={addTask} />
                <AllTasks tasks={tasks} removeTask={removeTask} />
        </div>
    )
}