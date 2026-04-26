export default async function Quote() {
    const res = await fetch('https://api.kanye.rest');
    const data = await res.json();

    return (
        <div className="mt-4 p-4 bg-white/20 rounded-lg backdrop-blur-sm">
            <p className="quote-text">"{data.quote}"</p>
        </div>
    );
}