import { useState } from "react"
import DropdownCategory from "./DropdownCategory.jsx"
import { FaSearch } from "react-icons/fa"
import "./SearchNav.scss"
import DropdownDate from "./DropdownDate.jsx"




export default function SearchNav(){

    const events = [
    { id: '1', name: 'punk concert', type:"concert"},
    { id: '2', name: 'ableton workshop ', type:"workshop"},
    { id: '3', name: 'christmas market', type:"market"},
    { id: '4', name: 'horse meet disco', type:"party"},
];


    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');

    const filterEvents = (events, query) => {
    if (!query) {
        return events;
    }

    return events.filter((event) => {
        const eventName = event.name.toLowerCase();
        return eventName.includes(query);
    });
    };

    const filteredEvents = filterEvents(events, query);



    return(
    <div>
        <form className="search-navbar">
                <div className="search-icon"><FaSearch /></div>
                <DropdownCategory />
                <DropdownDate />
                <input type="text" placeholder="Keyword" name="s"/>
                <button type="submit">GO</button>
        </form>
        {/* <div>
            <ul>
                {filteredEvents.map((event) => (
                <li key={event.id}>{event.name}</li>
                ))}
            </ul>
        </div> */}
    </div>
    )
}