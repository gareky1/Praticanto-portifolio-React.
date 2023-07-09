import React from "react";
import { home } from "../data/dummydata";
import TypewriterComponent from "typewriter-effect";

export const Hero = () => {
  return (
    <section className="hero">
      {home.map((val, i) => (
        <div className="heroContent ">
          <h3 data-aos="fade-right">{val.text}</h3>
          <h1>
            <TypewriterComponent
              options={{
                strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                autoStart: true,
              }}
            />
          </h1>
          <p data-aos="fade-left">{val.desc}</p>
          <button className="primaryBtn" data-aos="fade-up-right">
            Download CV
          </button>
        </div>
      ))}
    </section>
  );
};
