"use client";

import { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";
import experience from "@/data/experience";
import { slideIn, wordByWord } from "@/util/animation";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const experiences = section.querySelectorAll(".experience");

    experiences.forEach((exp) => {

      const role = exp.querySelector(".role");
      const date = exp.querySelector(".date");
      const company = exp.querySelector(".company");
      const description = exp.querySelector(".description");
      
      if (role && date && company && description) {
        slideIn("left", exp, role, 0);
        slideIn("right", exp, date, 0);
        slideIn("up", exp, company, 0.5);
        wordByWord(exp, description);
      }
    });
  }, []);

  return (
    <Stack id="experience" ref={sectionRef}>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          padding: { xs: "6.4rem", lg: "10.8rem" },
          paddingTop: { xs: "4rem", lg: "12.2rem" },
          alignItems: "center",
          gap: { xs: "4rem", lg: "1rem" },
        }}
      >
        <Grid sx={{ alignSelf: "flex-start" }}>
          <Typography variant="h1">My Experience</Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.6rem",
            width: "57.6rem",
          }}
        >
          {experience.map((exp, index) => (
            <Stack gap={1} className="experience" key={index}>
              <Grid
                container
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography className="role" variant="h2">
                  {exp.role}
                </Typography>
                <Typography className="date" variant="h6">
                  {exp.date}
                </Typography>
              </Grid>
              <Typography className="company" color="#61d5ff" variant="h6">
                {exp.company}
              </Typography>
              <Typography variant="h6" className="description">
                {exp.description}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ExperienceSection;
