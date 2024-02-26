import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <section id="home"    className="home d-flex align-items-center justify-content-center"
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="">
              <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column mx-lg-5">
                  <h3 className="my-3 mx-5">
                    Take your business to the next level with the help of our
                    expert team and innovative solutions
                  </h3>
                  <div className="mt-3 button my-3 mx-lg-5">
                    <Link to="">Know More</Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  <img
                    className="img-fluid animated"
                    src="https://raw.githubusercontent.com/manishgupta72/rbtechimage/main/hompageimage.png"
                    alt=""
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

{
  /* <div className="container-fluid home d-flex justify-content-around align-items-center">
<div className="left">
  <div className="image">
    <img src="./src/assets/home.png" alt="" />
  </div>
</div>
<div className="right">
  <div className="text">
    <h3>
      Take your business to the next level with the help of our expert
      team and innovative solutions
    </h3>
  </div>
  <div className="button">
  <Link to="">
      <button>Know More</button>
    </Link>
  </div>
</div>
</div> */
}
