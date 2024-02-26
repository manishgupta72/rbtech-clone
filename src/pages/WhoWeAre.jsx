import React from "react";

const WhoWeAre = () => {
  return (
      <section id="whoweare">
    <div>
        <div className="header container-fluid nav_bg ">
          <div className="row">
            <div className="col-lg-6 order-1 order-lg-1 header-img align-items-center">
              <div className="collageImage">
                <div className="left mt-md-5">
                  <img className="img1" src="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/p2.jpg?token=GHSAT0AAAAAACLORNQYL4CF7BLM3JLKLAC4ZN6J5OQ" alt="" />
                  <img className="img2" src="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/p3.jpg?token=GHSAT0AAAAAACLORNQYVZ74MBAVL5RFPGZAZN6J5RQ" alt="" />
                </div>
                <div className="right">
                  <img className="img3" src="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/p1.jpg?token=GHSAT0AAAAAACLORNQZF3M4QQ6FOYIGKMZAZN6J5HQ" alt="" />
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 pt-5pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column">
              <div className="text mt-lg-5 mt-md-5">
                <h5 style={{ color: "#EBBE00" }}>WHO WE ARE</h5>
                <h2 className="color-light">
                  RB Tech Solutions is a cutting-edge IT solutions provider that
                  is committed to delivering strategic advice and flawless
                  execution that results in tangible outcomes for our clients.
                </h2>
                <p>
                  RB Tech Solutions is a Mumbai-based IT solutions company that
                  was founded in 2014 by a team of enthusiastic and creative
                  individuals. We offer services such as web development,
                  technology consultent, digital brand development and
                  technology redevelopment at affordable prices. We are
                  dedicated to helping businesses grow digitally and support the
                  concept of Digital India. Our team has a wide range of
                  experience working on projects for clients in various sectors,
                  and we pride ourselves on delivering high-quality,
                  user-friendly solutions that meet your unique needs and
                  requirements. We are committed to providing the best possible
                  service to our clients and strive to continually innovate in
                  the field of IT solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
      </section>
  );
};

export default WhoWeAre;
