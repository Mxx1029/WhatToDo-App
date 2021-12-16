import "./KeywordSearch.scss";

export default function KeywordSearch({ keyword, setKeyword }) {
	// const events = [
	// 	{ id: "1", name: "punk concert", type: "concert" },
	// 	{ id: "2", name: "ableton workshop ", type: "workshop" },
	// 	{ id: "3", name: "christmas market", type: "market" },
	// 	{ id: "4", name: "horse meet disco", type: "party" },
	// ];

	// const { search } = window.location;
	// const query = new URLSearchParams(search).get("s");
	// console.log(query); // new

	// setKeyword(query); // new

	// const events = props.events; // new but didn't work
	// const filterEvents = (events, query) => {
	// 	if (!query) {
	//         // props.setEvents(events); // new but didn't work
	// 		return events;
	// 	}

	// 	return events.filter((event) => {
	// 		const eventName = event.name.toLowerCase();
	// 		return eventName.includes(query);
	// 	});
	// };

	// const filteredEvents = filterEvents(events, query);

	return (
		<>
			{/* <input type="text" placeholder="Keyword" name="s" /> */}
			<input
				type="text"
				placeholder="Keyword"
				name="s"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			{/* <div>
                    <ul>
                        {filteredEvents.map((event) => (
                            <li key={event.id}>{event.name}</li>
                        ))}
                    </ul>
            </div> */}
		</>
	);
}
