import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import eventImg from "../../images/mockup_event_1.jpeg";
import FavoriteButton from "./ButtonFavorite";

import "./Card.scss";

export default function Card({event}) {
    const { name, image, category, start_date, end_date, summary } = event;

    //Dates: start date
    const startMomentStr = moment(start_date).format('D MMM ');
    const startMomentStrDay = moment(start_date).format('D ');
    //end date:
    const endMomentStr = moment(end_date).format('- D MMM');
   
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="" className="event-img" />
        
        {startMomentStr !== endMomentStr
        ? <p className="event-date">{startMomentStr} </p>
        : moment(startMomentStr).isSame(endMomentStr,'month') 
            ? <p className="event-date">{startMomentStrDay}{endMomentStr}</p>
            : <p className="event-date">{startMomentStr}{endMomentStr}</p>
        }  
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
