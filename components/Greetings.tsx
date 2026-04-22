"use client"
import { useState, useEffect } from "react";

export default function Greetings({ name }: { name: string }) {
    const [now, setNow] = useState<Date | null>(null);

    useEffect(() => {
        setNow(new Date());

        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function getGreeting() {
        const time = (now ?? new Date()).getHours();
        if (time < 12) return "Good Morning, " + name;
        if (time < 18) return "Good Afternoon, " + name;
        return "Good Evening, " + name;
    }

    return (
    <div className="flex justify-center items-center w-full">
        <h1 className="text-center text-4xl">{getGreeting()}</h1>
        <div className="ml-4 flex flex-col items-center">
            <h1 className="text-center text-lg">{now?.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }) ?? ""}</h1>
            {/* <p className="text-center black">
                {now?.toLocaleDateString("cs-CZ", { weekday: "long", day: "numeric", month: "long" }) ?? ""}
            </p> */}
        </div>
    </div>
);
}