export default async function FunFact() {
    const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const data = await res.json();

    return (
        <div className="mt-4 p-4 bg-white rounded-lg backdrop-blur-sm w-1/2">
            <p className="font-bold text-2xl p-2">Funfact</p>
            <p className="quote-text">{data.text}</p>
        </div>
    );
}