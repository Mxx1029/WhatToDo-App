import React from "react";
import {Link} from "react-router-dom";
import eventImg from "../../images/mockup_event_1.jpeg";
import FavoriteButton from "./ButtonFavorite";

import "./Card.scss";

export default function Card() {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={eventImg} alt="" className="event-img" />
        <p className="event-date">13 NOV</p>
      </div>
      <div className="card-text">
        <h5>mykki blanco at volksbühne</h5>
        <p>
          Instead of a DJ, the live show will, for the first time, feature a
          live band with background singers.
        </p>
        <div className="card-footer">
          <p>THEATER</p>
          <FavoriteButton />
          <Link to="/event-page" >
           <button >GO</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
