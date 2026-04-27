import { Task } from "@/lib/Task";
import { X } from "lucide-react";
export default function AllTasks({tasks, removeTask}: 
    {tasks: Task[], removeTask: (index: number) => void}) {
    return(
        <div className="backdrop-blur-md p-2 bg-white/20 rounded-md">
            <div className="flex p-2 border-b border-white/20 gap-4 items-center">
                <h2 className="w-7/10 border-r text-center font-bold">What to do</h2>
                <p className="text-center text-gray-500">Finish by</p>
            </div>
            {tasks.map((task, index) => (
                <div key={index} className="flex p-2 border-b border-white/20 gap-4 items-center">
                    <h2 className="w-7/10 border-r">{task.content}</h2>
                    <p className="whitespace-nowrap">{new Date(task.timeToComplete).toLocaleString('cs-CZ')}</p>
                    <button className="ml-auto text-red-500 hover:text-red-700 cursor-pointer" onClick={() => removeTask(index)}>
                        <X size={20} />
                    </button>
                </div>
            ))}
        </div>
    )
}