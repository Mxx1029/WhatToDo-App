import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment"; // new
import "./DropdownDate.scss";
import "react-datepicker/dist/react-datepicker.css";

export default function DropdownDate({ date, setDate }) {
	// const [date, setDate] = useState(moment());
	const [datepicker, setDatepicker] = useState(moment());
	// const handleChange = (date) => setDate(date);
	const handleChange = (datepicker) => setDatepicker(datepicker);

	return (
		<div className="select">
			{/* <select className="standard-select"> */}
			<select
				value={date}
				onChange={(e) => setDate(e.target.value)}
				className="standard-select"
			>
				<option className="option-date" value="Anytime">
					Anytime
				</option>
				<option className="option-date" value="Today">
					Today
				</option>
				<option className="option-date" value="Tomorrow">
					Tomorrow
				</option>
				<option className="option-date" value="This weekend">
					This weekend
				</option>
				{/* <option> */}
				<option value={datepicker}>
					{/* Custom <DatePicker selected={date} onChange={handleChange} /> */}
					Custom <DatePicker selected={datepicker} onChange={handleChange} />
				</option>
			</select>
			{/* <DatePicker selected={date} onChange={handleChange} /> */}
			{/* <input type="date" name="start-date" id="start"/> */}
		</div>
	);
}
