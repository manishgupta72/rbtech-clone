import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  const para1 = [
    "Website Design",
    "Wordpress Website",
    "E- commecrce",
    "Web Application",
    "CMS Development",
    "SE0 & SMO setup",
    "UI/UX Development",
    "App Development",
  ];
  const para2 = [
    "Business Consulting",
    "Digital Marketing Consulting",
    "Start-Up Consulting",
    "Technology Consulting",
    "Web Consutling",
  ];
  const para3 = [
    "Logo Design",
    "Brand Publishing",
    "Media Coverage",
    "Social Media Marketing",
    "Online Branding",
    "Product Branding",
    "Digital Influencer Marketing",
    "Paid Digital Marketing",
  ];

  return (
    <>
    <section id="whatwedo">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <h5 className="mt-5" style={{ color: "#EBBE00" }}>
          WHAT WE DO
        </h5>
        <h2 className="color-light  w-50 text-center">
          We offer quality service, premium products and great prices for your
          business grownth.
        </h2>
      </div>

      <div className="container h-100 m-auto d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <ServiceCard
              
              image="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/c1.png?token=GHSAT0AAAAAACLORNQYF6KT5AIPP7MRYKHMZN6J6QA"
              title="WEB DEVELOPMENT"
              ptag={para1}
              margin={5}
            />
          </div>
          <div className="col g-lg-3">
            <ServiceCard
              image="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/c2.png?token=GHSAT0AAAAAACLORNQYSRZWX3VY7JTQRCR2ZN6J6SA"
              title="CONSULTING"
              ptag={para2}
              
            />
          </div>
          <div className="col">
            <ServiceCard
              image="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/c3.png?token=GHSAT0AAAAAACLORNQYBNNQ554NFEB4ALXYZN6J6UQ"
              title="BRANDING"
              ptag={para3}
              margin={5}
            />
          </div>
        </div>
      </div>

      
        <div className="home container-fluid my-5 py-5">
         <div className="row">
         <div className="sirImage col-lg-6 order-lg-1 header-img align-items-center">
            <img className="sirImage" src="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/sir.png?token=GHSAT0AAAAAACLORNQYRHM7SHDRWYJL34ZEZN6J6YA" alt="" />
          </div>
          <div className="col-md-12 col-lg-6  pt-lg-0 order-lg-2 d-flex justify-content-center flex-column">
            <p className="text" style={{fontSize:"20px", textAlign:"center" ,color:"#60697b"}}>
              “RB Tech Solutions is proud to have been recognized as one of the
              top 20 upcoming tech brands in India by Business Connect Magazine.
              In the January 2020 edition, the magazine featured our CEO and
              founder, Mr. Shwetank Dwivedi, and highlighted the growth and
              success of our company. This recognition is a testament to the
              hard work and dedication of our team, and we are committed to
              continuing to provide top-quality service and innovative solutions
              to our clients. If you are looking for a trusted partner to help
              your business grow and succeed, we encourage you to contact us to
              learn more about how we can help.”
            </p>
            <div className="mt-3 button my-3 mx-lg-5 mt-5  ">
              <Link to="">Know More</Link>
            </div>
          </div>
         </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
