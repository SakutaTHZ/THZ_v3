import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

const ProjectSideScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const stickySection = document.querySelector(".steps");
    const stickyHeight = stickySection.scrollHeight + window.innerHeight * 3;
    const cards = document.querySelectorAll(".card");
    const countContainer = document.querySelector(".card-container");
    const totalCards = cards.length;

    // ScrollTrigger.create({
    //   trigger: stickySection,
    //   start: "top top",
    //   end: `+=${stickyHeight}px`,
    //   pin: true,
    //   pinSpacing: true,
    //   onUpdate: (self) => {
    //     positionCards(self.progress);
    //   },
    // });

    // const getRadius = () => {
    //   return window.innerHeight < 900
    //     ? window.innerWidth * 7.5
    //     : window.innerHeight * 2.5;
    // };
    // const arcAngle = Math.PI * 0.4;
    // const startAngle = Math.PI / 2 - arcAngle / 2;

    // const positionCards = (progress = 0) => {
    //   const radius = getRadius();
    //   const totalTravel = 1 + totalCards / 7.5;
    //   const adjustedPorgress = (progress * totalTravel - 1) * 0.75;

    //   cards.forEach((card, i) => {
    //     const normalizedProgress = (totalCards - 1 - i) / totalCards;
    //     const cardProgress = normalizedProgress + adjustedPorgress;
    //     const angle = startAngle + arcAngle + cardProgress;

    //     const x = Math.cos(angle) * radius;
    //     const y = Math.sin(angle) * radius;
    //     const rotation = (angle - Math.PI / 2) * (180 / Math.PI);

    //     gsap.set(card, {
    //       x: x,
    //       y: -y + radius,
    //       rotation: -rotation,
    //       transformOrigin: "center center",
    //     });
    //   });
    // };

    // positionCards(0)

  }, []);

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
