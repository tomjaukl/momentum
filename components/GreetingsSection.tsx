"use client"
import useUserName from "@/hooks/useUserName";
import Greetings from "@/components/Greetings";

export default function GreetingsSection({onClearTasks}: {onClearTasks: () => void}) {
    const { userName, saveUserName, mounted } = useUserName();

    return (
        <div>
            {mounted && <Greetings onClearTasks={onClearTasks} name={userName || "Guest"} onSave={(name) => saveUserName(name)} />}
        </div>
    )
}