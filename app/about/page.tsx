import Info from "@/components/InfoSection";
import React from "react";
import SkillsSection from "@/components/SkillsSection";
import { Divider } from "@mui/material";
import ExperienceSection from "@/components/ExperienceSection";
import LetsConnect from "@/components/LetsConnect";

const About = () => {
  return (
    <>
      <Info />
      <SkillsSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <LetsConnect />
    </>
  );
};

export default About;
