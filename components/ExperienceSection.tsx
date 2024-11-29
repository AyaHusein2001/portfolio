"use client";

import { useEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Stack, Typography } from "@mui/material";
import experience from "@/data/experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const experiences = section.querySelectorAll(".experience");

    experiences.forEach((exp, index) => {
      const role = exp.querySelector(".role");
      const date = exp.querySelector(".date");
      const company = exp.querySelector(".company");
      const description = exp.querySelector(".description");

      // Role slides from left
      gsap.fromTo(
        role,
        { x: -100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            toggleActions: "restart none none none",
            trigger: exp,
            start: "top 80%",
          },
        }
      );

      // Date slides from right
      gsap.fromTo(
        date,
        { x: 100, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            toggleActions: "restart none none none",
            trigger: exp,
            start: "top 80%",
          },
        }
      );

      // Company slides up
      gsap.fromTo(
        company,
        { y: 50, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            toggleActions: "restart none none none",
            trigger: exp,
            start: "top 70%",
          },
        }
      );

      // Description word-by-word animation
      if (description) {
        const words = description.textContent?.split(" ") || [];
        description.innerHTML = words
          .map((word) => `<span class="word">${word}</span>`)
          .join(" ");

        const wordEls = description.querySelectorAll(".word");

        gsap.fromTo(
          wordEls,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              toggleActions: "restart none none none",
              trigger: exp,
              start: "top 100%",
            },
          }
        );
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
          {experience.map((exp,index) => (
            <Stack gap={1} className="experience" key={index}>
              <Grid
               
                container
                alignItems={"center"}
                justifyContent={'space-between'}
              >
                <Typography className="role" variant="h2">{exp.role}</Typography>
                <Typography className="date" variant="h6">{exp.date}</Typography>
              </Grid>
              <Typography className="company" color="#61d5ff" variant="h6">
                {exp.company}
              </Typography>
              <Typography variant="h6" className="description">{exp.description}</Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ExperienceSection;
