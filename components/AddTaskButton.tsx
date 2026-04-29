import { Plus} from "lucide-react"
import { useState} from "react";
import AddTaskWindow from "./AddTaskWindow";
export default function AddTaskButton({addTask}: {addTask: (content: string, timeToComplete: number) => void}) {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div>
            <button className="absolute top-3 right-3 border-2 rounded-md cursor-pointer hover:bg-green-400/60"
             onClick={() => setIsOpen(!isOpen)}>
                <Plus></Plus>
            </button>
            {isOpen && (
                <AddTaskWindow addTask={addTask} onClose={() => setIsOpen(!isOpen)} />
            )}
        </div>
    )
}