import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./DropdownDate.scss";
import "react-datepicker/dist/react-datepicker.css";

export default function DropdownDate(){
    const [date, setDate] = useState(new Date());
    const handleChange = date => setDate(date);

    
    return(
        <div className="select">
            <select className="standard-select">
                <option className="option-date" value="Anytime">Anytime</option>
                <option className="option-date" value="Today">Today</option>
                <option className="option-date" value="Tomorrow">Tomorrow</option>
                <option className="option-date" value="This weekend">This weekend</option>
                <option >Custom <DatePicker selected={date} onChange={handleChange} /></option>
                
            </select>
            {/* <DatePicker selected={date} onChange={handleChange} /> */}
            {/* <input type="date" name="start-date" id="start"/> */}
        </div>
    )
}