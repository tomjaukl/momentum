"use client";
import { useState, useRef } from "react";
// using useRef for interval to avoid issues with stale state in setInterval callback
export default function Pomodoro() {
    const [isRunning, setIsRunning] = useState(false);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [clockHours, setClockHours] = useState(0);
    const [clockMinutes, setClockMinutes] = useState(0);
    const [clockSeconds, setClockSeconds] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    function setDigits(timeLeft: number) {
        setClockHours(Math.floor(timeLeft / (1000 * 60 * 60)));
        setClockMinutes(Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)));
        setClockSeconds(Math.floor((timeLeft / 1000) % 60));
    }

    function start() {
        if (minutes === 0 && hours === 0) {
            alert("Please enter a valid time.");
            return;
        }
        setClockHours(hours);
        setClockMinutes(minutes);
        setClockSeconds(0);
        setIsRunning(true);
        let timeLeft = (hours * 60 + minutes) * 60 * 1000;
        intervalRef.current = setInterval(() => {
            timeLeft -= 1000;
            if (timeLeft <= 0) {
                clearInterval(intervalRef.current!);
                setIsRunning(false);
                setClockHours(0);
                setClockMinutes(0);
                setClockSeconds(0);
                return;
            }
            setDigits(timeLeft);
        }, 1000);
    }

    function stop() {
        clearInterval(intervalRef.current!);
        setIsRunning(false);
        setClockHours(hours);
        setClockMinutes(minutes);
        setClockSeconds(0);
    }

    return (
        <div className="bg-white rounded-lg p-4 mt-10 mb-10">
            <h1 className="text-center text-3xl">Pomodoro Timer</h1>
            <p className="text-center">Stay focused and productive!</p>
            <div className="flex flex-col items-center mt-4">
                {isRunning && (
                    <h1 className="text-8xl font-bold p-10">
                        {clockHours.toString().padStart(2, '0')}:{clockMinutes.toString().padStart(2, '0')}:{clockSeconds.toString().padStart(2, '0')}
                    </h1>
                )}
                <div>
                    <input type="number" placeholder="Hours" className="border border-gray-300 rounded-md p-2 m-2" onChange={(e) => setHours(parseInt(e.target.value) || 0)} />
                    <input type="number" placeholder="Minutes" className="border border-gray-300 rounded-md p-2 m-2" onChange={(e) => setMinutes(parseInt(e.target.value) || 0)} />
                </div>
                <button
                    onClick={isRunning ? stop : start}
                    className="bg-black text-white pl-10 pr-10 rounded-md p-2 mt-4 hover:bg-blue-600"
                >
                    {isRunning ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
}