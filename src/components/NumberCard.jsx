import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const NumberCard = ({ heading, content, image, cardcolor }) => {
  const [CounterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      <div>
      <div
        className="card SampleCard"
        style={{ width: "18rem", backgroundColor: `${cardcolor}` }}
      >
        <img className="card-img" src={image} alt="Card image cap" />
        <div className="card-body">
          <h3 className="card-title text-center">{CounterOn&&<CountUp start={0} end={heading} duration={2} delay={0}/>}+</h3>
          <p className="card-text text-center">{content}</p>
        </div>
      </div>
    </div>
    </ScrollTrigger>
  );
};

export default NumberCard;
