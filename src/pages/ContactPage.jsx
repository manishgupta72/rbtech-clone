import React from "react";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
        <section id="contact">
    <div>
      <div className="contact">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-2 align-items-center">
                <div className="contact-form">
                  <Contact />
                </div>
              </div>
              <div className="col-md-12 col-lg-6  order-1 order-lg-1 justify-content-center flex-column">
                <div className="text ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope-letter-icon.png/480px-Envelope-letter-icon.png" alt="" style={{width:"50px",marginLeft:"7%",marginBottom:"20px",marginTop:"20px"}} />
                  <p className="contactPara" >
                    "At RB Tech Solutions, we are dedicated to bringing rapid
                    solutions that make the lives of our clients easier through
                    the use of technology. We are here to help you find the best
                    solutions to meet your needs and leverage technology in your
                    business. If you have any questions, please don't hesitate
                    to reach out to us using the contact form. We will get back
                    to you promptly and do our best to assist you."
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
        </section>
  );
};

export default ContactPage;
