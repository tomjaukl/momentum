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

    return { tasks, addTask};
}