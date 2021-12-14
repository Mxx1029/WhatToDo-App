import { useState, useEffect } from "react"
import "./DropdownCategory.scss"
import axios from "axios";

export default function DropdownCategory(props){

    // This keeps track of what filter is active
    const [filter, setFilter] = useState(null);
    const setEvents = props.setEvents

    // This updates which items to show when the filter is changed

    useEffect(() => {
        axios({
            url: "/events/search",
            method: "POST",
            data: {category: filter},
            headers: {
                "Content-type":"application/json",
            }
        })
            .then(response => {
                console.log(response.data)
                const events = response.data
                console.log("Filter changed! New filter is", filter);
                props.setEvents(events);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, [filter, setEvents])

    return(
        <div className="select">
            <select value={filter} onChange={e => setFilter(e.target.value)} className="standard-select">
                <option className="option-category" value="">Anything</option>
                <option className="option-category" value="Free">Free</option>
                <option className="option-category" value="Workshop">Workshop</option>
                <option className="option-category" value="Family">Family</option>
                <option className="option-category" value="Market">Market</option>
                <option className="option-category" value="Food">Food and drinks</option>
                <option className="option-category" value="Reading">Reading</option>
                <option className="option-category" value="Opening">Opening</option>
                <option className="option-category" value="Exhibition">Exhibition</option>
                <option className="option-category" value="Performing Arts">Performing Arts</option>
                <option className="option-category" value="Film">Film</option>
                <option className="option-category" value="Music">Music</option>
                <option className="option-category" value="Party">Party</option>
            </select>
        </div>
    )
}