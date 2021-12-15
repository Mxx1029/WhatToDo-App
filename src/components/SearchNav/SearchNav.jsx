import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchNav.scss";
import DropdownCategory from "./DropdownCategory.jsx";
import DropdownDate from "./DropdownDate.jsx";
import KeywordSearch from "./KeywordSearch.jsx";

// export default function SearchNav(props) {
export default function SearchNav({
    events,
	category,
	setCategory,
	date,
	setDate,
	keyword,
	setKeyword,
    getSearchResults
}) {
	// const events = [
	// 	{ id: "1", name: "punk concert", type: "concert" },
	// 	{ id: "2", name: "ableton workshop ", type: "workshop" },
	// 	{ id: "3", name: "christmas market", type: "market" },
	// 	{ id: "4", name: "horse meet disco", type: "party" },
	// ];

	// const { search } = window.location;
	// const query = new URLSearchParams(search).get("s");

	// // const events = props.events; // new
	// const filterEvents = (events, query) => {
	// 	if (!query) {
	//         // props.setEvents(events); // new
	// 		return events;
	// 	}

	// 	return events.filter((event) => {
	// 		const eventName = event.name.toLowerCase();
	// 		return eventName.includes(query);
	// 	});
	// };

	// const filteredEvents = filterEvents(events, query);

	const handleSubmit = (e) => {
		e.preventDefault();
        getSearchResults(category, date, keyword);
	};

    // new useEffect if SearchNav is used
	// useEffect(() => {
		
	// }, [events]);

	return (
		<div>
			<form className="search-navbar" onSubmit={handleSubmit}>
				<div className="search-icon">
					<FaSearch />
				</div>
				{/* <DropdownCategory setEvents={props.setEvents} /> */}
				<DropdownCategory category={category} setCategory={setCategory} />
				{/* <DropdownDate /> */}
				<DropdownDate date={date} setDate={setDate} />
				{/* <input type="text" placeholder="Keyword" name="s" /> */}
				<KeywordSearch keyword={keyword} setKeyword={setKeyword} />
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
	);
}
