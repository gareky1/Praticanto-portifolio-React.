import React from "react";
import { about } from "../data/dummydata";
import { Heading } from "../common/Heading";

export const About = () => {
  return (
    <>
      <section className="about">
        <div className="container flex">
          {about.map((val, i) => (
            <>
              <div className="left">
                <img src={val.cover} alt="" data-aos="fade-down-right" />
              </div>
              <div className="rigth" data-aos="fade-down-left">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Dowload CV</button>
                <button className="primaryBtn">Dowload CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};
