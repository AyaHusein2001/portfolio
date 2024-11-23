import Info from "@/components/InfoSection";
import React from "react";
import theme from "@/global/theme";

import { ThemeProvider } from "@mui/material/styles";
import SkillsSection from "@/components/SkillsSection";
import { Divider } from "@mui/material";
import ExperienceSection from "@/components/ExperienceSection";

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Info />
      <SkillsSection/>
      <Divider />
      <ExperienceSection/>
    </ThemeProvider>
  );
};

export default About;
