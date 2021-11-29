import React from "react";
import {Link} from "react-router-dom";
import eventImg from "../../images/mockup_event_1.jpeg";
import FavoriteButton from "./ButtonFavorite";

import "./Card.scss";

export default function Card({event}) {
    const { name, image, category, start_date, end_date, summary } = event;
   
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="" className="event-img" />
        <p className="event-date">{start_date}</p>
      </div>
      <div className="card-text">
        <h5 className="card-title">{name}</h5>
        <p className="card-summary">{summary}</p>
        <div className="card-footer">
          <p className="card-category"><span>{category}</span></p>
          <FavoriteButton />
          <Link to="/event-page" >
           <button >GO</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
