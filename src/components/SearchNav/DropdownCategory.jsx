import { useState, useEffect } from "react"
import "./DropdownCategory.scss"
import axios from "axios";

export default function DropdownCategory(){

    // This keeps track of what filter is active
    const [filter, setFilter] = useState(null);

    // This keeps track of which items to show
    const [filtered, setFiltered] = useState()

    // This updates which items to show when the filter is changed
    useEffect(() => {
        axios.post('/events/search')
            .then(response => {
                console.log(response.data)
                setFilter(response.data);
                setFiltered(response.data);
                const events = response.data
                console.log("Filter changed! New filter is", filter);
                if (filter) {
                    setFiltered(events.filter(x => x.category === filter));
                } else {
                    setFiltered(events);
                }
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, [filter, setFiltered])

    // if (filter) {
    //                 setFiltered(events.filter(x => x.type === filter));
    //             } else {
    //                 setFiltered(events);
    //             }

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
            <div>
                {filtered.map((value,index)=>{
                    return(
                        <div>
                            <div>{value.category}</div>
                        </div>)})}
            </div>
            {/* <ul>
                {filtered.map(x => <li key={x.id}>{x.name}</li>)}
            </ul> */}
        </div>
    )
}