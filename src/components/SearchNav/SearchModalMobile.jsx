import React from "react";
import ReactDOM from "react-dom";
import DropdownCategory from "./DropdownCategory";
import DropdownDate from "./DropdownDate";
import { FaTimes } from "react-icons/fa";
import "./SearchModalMobile.scss";

const SearchModalMobile =  ({ show, close, title })  => {
  return (
    <>
     {
     show ?
     
     <div
        className="search-modalContainer"
        onClick={() => close()}
      >
        <div className="search-modal" onClick={(e) => e.stopPropagation()}>
          <header className="search-modal_header">
            <h2 className="search-modal-header-title">{title}</h2>
            <button className="close-search-modal" onClick={() => close()}>
              <FaTimes />
            </button>
          </header>
          <main className="search-modal_content">
          <DropdownCategory />
          <DropdownDate />
          <input type="text" placeholder=" Keyword" name="s" className="keyword-mobile"/>
          </main>
          <footer className="search-modal_footer">
            <button className="submit-mobile-search" type="submit">GO</button> 
            <button className="modal-close-search" onClick={() => close()} >
              Cancel Search
            </button>
          </footer>
        </div>
      </div>
      : null
     }
    </>
  );
};

export default SearchModalMobile;
