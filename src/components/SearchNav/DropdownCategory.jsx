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
                <option value="anything">Anything</option>
                <option value="free">Free</option>
                <option value="workshop">Workshop</option>
                <option value="family">Family</option>
                <option value="market">Market</option>
                <option value="food and drinks">Food and drinks</option>
                <option value="reading">Reading</option>
                <option value="opening">Opening</option>
                <option value="exhibition">Exhibition</option>
                <option value="performing Arts">Performing Arts</option>
                <option value="film">Film</option>
                <option value="music">Music</option>
                <option value="party">Party</option>
            </select>
            {/* <ul>
                {filtered.map(x => <li key={x.id}>{x.name}</li>)}
            </ul> */}
        </div>
    )
}