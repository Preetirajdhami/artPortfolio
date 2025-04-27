"use client";
import { motion } from "framer-motion";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import MissionAndSkills from "./components/Home/MissionAndSkills";
import Testimonials from "./components/Home/Testimonials";

export default function Home() {
  return (
    <div className="bg-background ">
     
     <Hero />
     <About />
     <MissionAndSkills />
     <Testimonials />
    </div>
  );
}
