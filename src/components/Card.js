import React from "react";
import "./card.css";
import location from "../images/locationicon.png";
function Card(props) {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={props.img} alt="touristattraction" />
      </div>

      <div className="card-texts">
        <div className="card-header">
          <img src={location} alt="icon" />
          <p>{props.location}</p>
          <a href={props.gmap} target="_blank" rel="noreferrer">
            View on Google Maps
          </a>
        </div>

        <h1>{props.title}</h1>
        <h6>
          {props.sdate}-{props.edate}
        </h6>
        <div className="card-description">
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

// title={elem.title}
//           location={elem.location}
//           gmap={elem.googleMapsUrl}
//           sdate={elem.startDate}
//           edate={elem.endDate}
//           desc={elem.description}
//           img={elem.imageUrl}
