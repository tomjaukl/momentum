export type Scene = {
    name: string;
    videoSrc: string;
    audioSrc?: string;
}

export const scenes: Scene[] = [
    { name: "Blue Sky", videoSrc: "/videos/BlueSky.mp4" },
    { name: "Rainy Window", videoSrc: "/videos/Rain.mp4", audioSrc: "/audio/Rain.mp3" },
]