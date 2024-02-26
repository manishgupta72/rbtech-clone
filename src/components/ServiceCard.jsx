import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ image, title, ptag,margin }) => {
  return (
    <div>
      <div className={`card ServiceCard mt-${margin?margin:"3"} `} >
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {ptag&&ptag.map((elem, index) => (
            <p className="card-text" key={index}>
              <i className="fa-solid fa-check"></i>
              {elem}
            </p>
          ))}

          <div className="ml-5 button  mx-lg-5 mt-5  ">
            <Link to="/services">Know More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
