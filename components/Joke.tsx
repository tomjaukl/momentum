export default async function Joke() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    console.log(data);
    return (
        <div className="mt-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm w-1/2">
            <p className="font-bold">Joke (A bad one)</p>
            <p>{data.setup}</p>
            <p>{data.punchline}</p>
        </div>
    )
}