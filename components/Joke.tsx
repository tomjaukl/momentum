export default async function Joke() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    console.log(data);
    return (
        <div className="mt-4 p-4 bg-white rounded-lg backdrop-blur-sm w-1/2 border-spacing-1 border-2 border-white/20">
            <p className="font-bold text-2xl p-2">Joke</p>
            <p className="text-md">{data.setup}</p>
            <p>→ {data.punchline}</p>
        </div>
    )
}