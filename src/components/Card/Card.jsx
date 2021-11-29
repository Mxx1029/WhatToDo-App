import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import {eventDefaultDB} from "../../images/defaultImagesDB/defaultImagesDB";
import FavoriteButton from "./ButtonFavorite";

import "./Card.scss";

export default function Card({event}) {
    const { name, image, category, start_date, end_date, summary } = event;

    //Dates: start date
    const startMomentStr = moment(start_date).format('D MMM');
    const startMomentStrDay = moment(start_date).format('D ');
    //end date:
    const endMomentStr = moment(end_date).format(' - D MMM');

    //print a random default image of the array db
    let defaultImage = eventDefaultDB[Math.floor(Math.random()*eventDefaultDB.length)];

   
  return (
    <div className="card-container">
      <div className="image-container">
        {/* Event image */}
        {image !== ""
          ? <img src={image} alt="" className="event-img" />
          : <img src={defaultImage} alt="" className="event-img" />
        }
         {/* Event Date  */}
        {startMomentStr === endMomentStr
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
