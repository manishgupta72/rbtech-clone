import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 footer">
      <footer className="text-center text-lg-start">
        {/* <!-- Grid container --> */}
        <div className="p-4">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6  mb-md-0 ">
              <h4 className=" bold title">
                Connect with us and discover how we can help your business grow
                and thrive
              </h4>
              <h5 className="mt-5 title">
                Connect with us and discover how we can help your business grow
                and thrive
              </h5>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-md-0">
              <h5 className="title">Need Help?</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to="#!" className="text-body">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="text-body">
                    E-Commerce Development
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="text-body">
                    SEO and SMO Setup
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="text-body">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="text-body">
                    Technology Consultant
                  </Link>
                </li>
                <li>
                  <Link to="#!" className="text-body">
                    Mobile App Development
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="title">Get in Touch</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-body">
                    support@rbtech.in
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    022-49781001
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    +91-9819866348
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}

            {/* <!--Grid column--> */}
            <div className="col-lg-3 col-md-6  mb-md-0">
              <h5 className="title">Address</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-body">
                    Goregaon East,
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-body">
                    Mumbai, Maharashtra,
                  </a>
                </li>

                <li>
                  <a href="#!" className="text-body">
                    India
                  </a>
                </li>
              </ul>
            </div>
            {/* <!--Grid column--> */}
          </div>
          {/* <!--Grid row--> */}
        </div>
        {/* <!-- Grid container --> */}
        <hr />
        {/* <!-- Copyright --> */}
        <div className="copyright d-flex justify-content-between mx-5">
          <div className="text-center p-3 ml-4">
            © 2023 RB Tech Solutions LLP. All rights reserved.
          </div>
          <div className="copysocial">
            <Link to="#twitter">
              <i className="fa-brands fa-twitter"></i>
            </Link>

            <Link to="#facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>

            <Link to="#instagram">
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </div>
  );
};

export default Footer;
