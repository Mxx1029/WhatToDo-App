import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SearchNav from "../SearchNav/SearchNav";
import Card from "../Card/Card";

import "./LandingPage.scss";
import {FaThList} from "react-icons/fa";
import {FaThLarge} from "react-icons/fa";

export default function LandingPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [direction, setDirection] = useState();

  useEffect(() => {
    fetchEvents();
    setLoading(false);
  }, []);

  const fetchEvents = () => {
    axios
      .get("http://localhost:9012/events/today") //this should be POST to be able to add diff variables to search context
      .then((res) => {
        console.log(res);
        setEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return "Loading...";
  }

  console.log(events);

  return (
    <div className="search-nav">
      <div className="top">
        <Header />
        <SearchNav />
      </div>
      <div className="search-results">
        <h2>WHAT TO DO ...TODAY?</h2>
        <button onClick={() => setDirection(false)} className="display-single">
          <FaThList />
        </button>
        <button onClick={() => setDirection(true)} className="display-grid">
          <FaThLarge />
        </button>
      </div>
      <main className={direction && "one-per-row"}>
        {events?.map((event, index) => (
          <Card key={event._id} event={event} index={index} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
