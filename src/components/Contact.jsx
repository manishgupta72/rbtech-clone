import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="">
      <form className="text-center border border-light mt-5 p-5">
        <div className="row ">
          <div className="col">
            {/* <!-- First name --> */}
            <input type="text" className="form-control" placeholder="Name*" />
          </div>
          {/* <!-- E-mail --> */}
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="E-mail*"
            />
          </div>
        </div>

        <div className="row">
            {/* <!-- Mobile --> */}
        <div className="col">
          <input type="text" className="form-control" placeholder="Mobile" />
        </div>
        {/* <!-- Service --> */}
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Select Service*"
          />
        </div>
        </div>
        <div className="col mt-5">
          <textarea
            className="form-control"
            rows="3"
            placeholder="Message*"
          ></textarea>
        </div>

        {/* <!-- Sign up button --> */}
        <div className="send-button mt-5">
          <Link to="">Send message</Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
