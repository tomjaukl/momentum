"use client"
import { Task } from "@/lib/Task";
import {useState, useEffect} from "react";
export default function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storedTasks = (localStorage.getItem('tasks') || '[]');
        setTasks(JSON.parse(storedTasks));
    }, []);

    function addTask(content: string, timeToComplete: number) {
        const newTask: Task = {
            content,
            timeToComplete
        }
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }
    function debuglog() {
        alert(JSON.stringify(tasks))
    }
    function removeTask(index: number) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        console.log(`Removed task at index ${index}`);
    }
    function clearAllTasks() {
        setTasks([]);
        localStorage.removeItem('tasks');
    }

    return { tasks, addTask, debuglog, clearAllTasks, removeTask };
}