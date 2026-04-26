"use client"
import useUserName from "@/hooks/useUserName";
import Greetings from "@/components/Greetings";

export default function GreetingsSection() {
    const { userName, saveUserName, mounted } = useUserName();

    return (
        <div>
            {mounted && <Greetings name={userName || "Guest"} onSave={(name) => saveUserName(name)} />}
        </div>
    )
}