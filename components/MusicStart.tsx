"use client";
import { useState, useRef } from "react";
import { Music } from "lucide-react";

export default function MusicStart({ audioPath }: { audioPath: string }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    function toggleMusic() {
        const audio = audioRef.current!;
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play();
            setIsPlaying(true);
        }
    }

    return (
        <>
            <audio ref={audioRef} src={audioPath} />
            <button onClick={toggleMusic} className="absolute top-4 left-15 hover:text-white rounded-md cursor-pointer">
                <Music />
            </button>
        </>
    );
}