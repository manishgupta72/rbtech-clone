import React from "react";

const SampleCard = ({ heading, content, cardcolor }) => {
  return (
    <div>
      <div
        className="card SampleCard text-white mb-3"
        style={{ backgroundColor: `${cardcolor}` }}
      >
        <div className="card-body">
          <h4 className="card-title ">{heading}</h4>
          <p className="card-text" style={{ color: "#607AAB" }}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
