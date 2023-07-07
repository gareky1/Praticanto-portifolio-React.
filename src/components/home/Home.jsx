import React from "react";
import { Hero } from "./Hero";
import { About } from "../pages/About";
import { Services } from "./Services";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
    </>
  );
};
