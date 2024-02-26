import React from "react";
import SampleCard from "../components/SampleCard";
import NumberCard from "../components/NumberCard";
const WhyChooseUs = () => {
  return (
    <>
      <section className="" id="whychooseus">
        <div className="d-flex justify-content-center flex-column align-items-center">
          <h5
            className="heading mt-5"
            style={{ color: "#EBBE00", fontWeight: "bold", fontSize: "1.4rem" }}
          >
            WHY CHOOSE RB TECH SOLUTIONS
          </h5>
          <h2
            className="para color-light text-center"
            style={{ fontWeight: "bold" }}
          >
            Here are some reasons to choose RB Tech Solutions as your IT
            solutions provider.
          </h2>
        </div>

        <div>
          <div className="">
            <div className="whychoseus">
              <div className="row">
                <div className="text-center order-2 w-75  order-lg-1 ">
                  <h1 className="color-light mb-5">
                    RB Tech Solutions is a cutting-edge IT solutions provider
                    that is committed to delivering strategic advice and
                    flawless execution that results in tangible outcomes for our
                    clients.
                  </h1>
                  <h5 className="">
                    RB Tech Solutions is a Mumbai-based IT solutions company
                    that was founded in 2014 by a team of enthusiastic and
                    creative individuals. We offer services such as web
                    development, technology consultent, digital brand
                    development and technology redevelopment at affordable
                    prices. We are dedicated to helping businesses grow
                    digitally and support the concept of Digital India. Our team
                    has a wide range of experience working on projects for
                    clients in various sectors, and we pride ourselves on
                    delivering high-quality, user-friendly solutions that meet
                    your unique needs and requirements. We are committed to
                    providing the best possible service to our clients and
                    strive to continually innovate in the field of IT solutions.
                  </h5>
                </div>
                <div className="order-1 order-lg-2">
                  <div className="row ">
                    <div className="col d-flex justify-content-center align-items-center">
                      <SampleCard
                        heading={"Wide range of expertise"}
                        content={
                          "Our team has experience working on a variety of projects and clients, so we are well-equipped to handle your unique needs."
                        }
                        cardcolor={"#FEF3E4"}
                      />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                      <SampleCard
                        heading={"High-quality service and solutions"}
                        content={
                          "We are dedicated to providing top-quality service and solutions to our clients, and we are committed to continually improving and innovating in the field of IT."
                        }
                        cardcolor={"#FAE6E7"}
                      />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center">
                      <SampleCard
                        heading={"Affordable pricing"}
                        content={
                          "We offer competitive pricing for our services and products, so you can get the solutions you need without breaking the bank."
                        }
                        cardcolor={"#EAF3EF"}
                      />
                    </div>
                    <div className="col d-flex justify-content-center align-items-center ">
                      <SampleCard
                        heading={"Convenient and flexible support"}
                        content={
                          "We make it easy for you to connect with us and get the support you need, and we are flexible and adaptable to work with you to find the best solutions for your business."
                        }
                        cardcolor={"#E9EAF8"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Our-Numbers mt-4">
          <div className="col text-center d-flex justify-content-center">
            <div className="left">
              <h2 style={{ color: "#EBBE00", fontWeight: "bold" }}>
                OUR NUMBERS
              </h2>

              <h2
                className="color-light"
                style={{
                  color: "#030343",
                  fontSize: "2.1rem",
                  fontWeight: "bold",
                }}
              >
                We are proud of our works
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center my-3">
              <NumberCard
                heading={"600"}
                content={"Completed Projects"}
                image={
                  "https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/project.png?token=GHSAT0AAAAAACLORNQYZUD6QR7NK2XO5LFUZN6J3EA"
                }
                cardcolor={"#FEF3E4"}
              />
            </div>
            <div className="col d-flex justify-content-center align-items-center my-3">
              <NumberCard
                heading={"250"}
                content={"Happy Customers"}
                image={
                  "https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/customer.png?token=GHSAT0AAAAAACLORNQY42SRD3FUMJUA6IT6ZN6J2RA"
                }
                cardcolor={"#EAF3EF"}
              />
            </div>
            <div className="col d-flex justify-content-center align-items-center my-3">
              <NumberCard
                heading={"9"}
                content={"Year Exprience"}
                image={
                  "https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/experience.png?token=GHSAT0AAAAAACLORNQZM6NOF6EWQQBVEPP4ZN6J3SQ"
                }
                cardcolor={"#FAE6E7"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
