import React from "react";

const ProjectSideScroll = () => {
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)
  });
  return (
    <>
      <div className="projectSideScrollSection">
        <nav>
          <p id="logo">My Projects</p>
          <button>Download Now</button>
        </nav>

        <section className="intro"></section>
        <section className="steps">
          <div className="step-counter">
            <div className="counter-title">
              <h1>Steps</h1>
            </div>
            <div className="count">
              <div className="count-container">
                <h1>01</h1>
                <h1>02</h1>
                <h1>03</h1>
                <h1>04</h1>
                <h1>05</h1>
              </div>
            </div>
          </div>

          <div className="cards">
            <div className="card">
              <div className="card-img">
                <img src={`images/card-1.jpg`} alt="" />
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, enim sequi quibusdam magni at iste officia
                  voluptatum sapiente! Maiores nisi laudantium non ratione rem
                  delectus accusamus pariatur! Neque, temporibus iure.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={`images/card-1.jpg`} alt="" />
              </div>
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, enim sequi quibusdam magni at iste officia
                  voluptatum sapiente! Maiores nisi laudantium non ratione rem
                  delectus accusamus pariatur! Neque, temporibus iure.
                </p>
              </div>
            </div>

            <div className="card empty"></div>
            <div className="card empty"></div>
          </div>
        </section>
        <section className="outro">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            cum doloribus error exercitationem praesentium debitis dolore ea!
            Facilis dolore iure quasi <span>ipsum magnam illo voluptatem</span>{" "}
            cupiditate sapiente minima, eaque fugit.
          </p>
        </section>
      </div>
    </>
  );
};

export default ProjectSideScroll;
