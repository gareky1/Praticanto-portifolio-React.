import React from "react";
import { Hero } from "./Hero";
import { About } from "../pages/About";
import { Services } from "../pages/Services";
import { Counter } from "../pages/Counter";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
    </>
  );
};
