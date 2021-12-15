import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "./DropdownDate.scss";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchDateModal.scss";

const SearchDateModal = ({ show, close, setDate }) => {
  const [datepicker, setDatepicker] = useState(new Date());
  const handleChange = (date) => {
    setDatepicker(date);
    setDate(date);
    close();
  };
  console.log(datepicker);
  return (
    <>
      {show ? (
        <div className="date-modalContainer" onClick={() => close()}>
          <div className="date-modal" onClick={(e) => e.stopPropagation()}>
            <header className="date-modal_header">
              <h2 className="date-modal-header-title">Choose a date</h2>
              <button className="date-modal-close" onClick={() => close()}>
                <FaTimes />
              </button>
            </header>
            <button
              className="submit-date"
              type="submit"
              onClick={() => setDate(datepicker)}
            >
              SUBMIT
            </button>
            <main>
              <DatePicker selected={datepicker} onChange={handleChange} />
              {/* <input type="date" name="start-date" id="start"/>   */}
            </main>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SearchDateModal;
