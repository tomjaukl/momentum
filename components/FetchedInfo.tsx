import FunFact from "./FunFact";
import Joke from "./Joke";
export default function FetchedInfo() {
    return (
        <div className="flex gap-5">
            <FunFact />
            <Joke />
        </div>
    )
}