import { Task } from "@/lib/Task";
import { X } from "lucide-react";
export default function AllTasks({tasks, removeTask}: 
    {tasks: Task[], removeTask: (index: number) => void}) {
    return(
        <div className="bg-white">
            <div className="flex p-2 border-b w-full items-center">
                <h2 className="w-7/10 border-r text-center font-bold">What to do</h2>
                <p className="w-3/10 text-center text-gray-500">Finish by</p>
            </div>
            {tasks.map((task, index) => (
                <div key={index} className="flex p-2 border-b border-black/60 items-center">
                    <h2 className="w-7/10 border-r text-center">{task.content}</h2>
                    <p className="w-3/10 whitespace-nowrap text-center">{new Date(task.timeToComplete).toLocaleString('cs-CZ')}</p>
                    <button className="absolute right-14 ml-auto text-black hover:text-red-700 cursor-pointer" onClick={() => removeTask(index)}>
                        <X size={20} />
                    </button>
                </div>
            ))}
        </div>
    )
}