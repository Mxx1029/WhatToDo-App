import { useState, useEffect } from "react"
import "./DropdownCategory.scss"

export default function DropdownCategory(){

// This is all of the stuff
const events = [
    { id: 1, type: "concert", name: "punk concert" },
    { id: 2, type: "workshop", name: "ableton workshop" },
    { id: 3, type: "family", name: "christmas market" },
];

    // This keeps track of what filter is active
    const [filter, setFilter] = useState(null);

    // This keeps track of which items to show
    const [filtered, setFiltered] = useState(events)

    // This updates which items to show when the filter is changed
    useEffect(() => {
        console.log("Filter changed! New filter is", filter);
        if (filter) {
            setFiltered(events.filter(x => x.type === filter));
        } else {
            setFiltered(events);
        }
    }, [filter, setFiltered])

    return(
        <div className="select">
            <select value={filter} onChange={e => setFilter(e.target.value)} className="standard-select">
                <option className="option-category" value="anything">Anything</option>
                <option className="option-category" value="free">Free</option>
                <option className="option-category" value="workshop">Workshop</option>
                <option className="option-category" value="family">Family</option>
                <option className="option-category" value="market">Market</option>
                <option className="option-category" value="food and drinks">Food and drinks</option>
                <option className="option-category" value="reading">Reading</option>
                <option className="option-category" value="opening">Opening</option>
                <option className="option-category" value="exhibition">Exhibition</option>
                <option className="option-category" value="performing Arts">Performing Arts</option>
                <option className="option-category" value="film">Film</option>
                <option className="option-category" value="music">Music</option>
                <option className="option-category" value="party">Party</option>
            </select>
            {/* <ul>
                {filtered.map(x => <li key={x.id}>{x.name}</li>)}
            </ul> */}
        </div>
    )
}