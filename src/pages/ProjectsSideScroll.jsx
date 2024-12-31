import React from "react";

const ProjectSideScroll = ()=>{
    return (
        <>
            <div className="text-white">
                <nav>
                    <p id="logo">Voxel</p>
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
                            <div className="card-img w-32 aspect-square">
                                <img src={`../assets/images/card-1.jpg`} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="outro"></section>
            </div>
        </>
    )
}

export default ProjectSideScroll;