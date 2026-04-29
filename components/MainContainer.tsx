"use client"
// I have to pass children just because of the components which use async data fetching, otherwise I would just put them directly in the MainContainer
import useTasks from "@/hooks/useTasks";
import Tasks from "./Tasks";
import GreetingsSection from "./GreetingsSection";
export default function MainContainer({children}: {children?: React.ReactNode}) {
    const { tasks, addTask, clearAllTasks, removeTask } = useTasks();
    return (
        <div className="flex flex-col max-w-7xl mx-8 xl:mx-auto px-4 bg-white/10 backdrop-blur-2xl rounded-lg p-4 mt-4 shadow-lg border-2 border-white/20">
            <GreetingsSection onClearTasks={clearAllTasks} />
            <Tasks addTask={addTask} tasks={tasks} removeTask={removeTask} />
            {children}
        </div>
    )
}