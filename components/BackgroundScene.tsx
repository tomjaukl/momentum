import { Scene} from "@/lib/scenes";
export default function BackgroundScene({ scene }: { scene: Scene }) {
    return (
        <div className="fixed inset-0 -z-10">
            <video
                src={scene.videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
            />
            <audio src={scene.audioSrc} autoPlay loop></audio>
        </div>
    )
}