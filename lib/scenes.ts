export type Scene = {
    name: string;
    videoSrc: string;
    audioSrc?: string;
}

export const scenes: Scene[] = [
    { name: "Blue Sky", videoSrc: "https://res.cloudinary.com/dzklizeya/video/upload/v1776584635/SunnySky_vpucgk.mp4" },
    { name: "Rainy Window", videoSrc: "https://player.cloudinary.com/embed/?cloud_name=dzklizeya&public_id=RainWindow_qwerty" },
]

