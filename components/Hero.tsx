'use client'
import { Box, IconButton, Typography } from "@mui/material";

import { FaCircle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CustomContainedButton from "./CustomContainedButton";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

import GsapImage from "./GsapImage";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    // Animate "Hi, I am" from the left
    gsap.set(".description", { x: "-100%" });


    gsap.to(".description", {
      scrollTrigger: {
        trigger: ".description",
        // start: "top 80%", 
        toggleActions: "restart none none none",
      },
      x: 0,
      duration: 2,
      ease: "power2.out",
    });


    // Animate "Aya Ahmed" with a scaling effect
    // gsap.fromTo(
    //   ".name",
    //   { scale: 0.8, autoAlpha: 0 },
    //   {
    //     scale: 1,
    //     autoAlpha: 1,
    //     duration: 1,
    //     ease: "elastic.out(1, 0.5)",
    //     scrollTrigger: {
    //       trigger: ".name",
    //       start: "top 75%",
    //       toggleActions: "restart none none none",
    //     },
    //   }
    // );

    const title = document.querySelector(".hi");
    if (title) {
      const htmlContent = title.innerHTML; 
      
      const characters = htmlContent.split(/(<br\s*\/?>|.)/g).filter(Boolean);

      
      title.innerHTML = characters
        .map((char) => {
          if (char.startsWith("<br")) {
            return char; 
          }
          return `<span class="char">${char === " " ? "&nbsp;" : char}</span>`;
        })
        .join("");

      
      gsap.fromTo(
        ".hi .char",
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.05, // Delay between character animations
          duration: 1,
          ease: "power3.out",
          repeat: -1, // Repeat infinitely
          repeatDelay: 0.5, // Optional: Add a delay before the animation restarts
          scrollTrigger: {
            trigger: ".hi",
            start: "top 70%",
            toggleActions: "restart none none none",
          },
        }
      );
    }

  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: { xs: "6.4rem", lg: "10.8rem" },
        paddingTop: { xs: "4rem", lg: "3rem" },
        alignItems: "center",
        flexDirection: { xs: "column", lg: "row" },
        gap: { xs: "4rem", lg: "1rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: { xs: "34.3rem", lg: "54.4rem" },
          gap: "4rem",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography className="hi" variant="h1">
            HI, I AM
            <br />
            Aya Ahmed.
          </Typography>
        </Box>

        <Typography className="description" variant="h6">
          A full-stack developer passionate about creating responsive,
          user-friendly web applications and innovative software solutions.
        </Typography>

        <Box sx={{ display: "flex", alignItems: 'center', gap: "1rem" }}>
          <CustomContainedButton
            link="#lets-connect"
            xsIcon={
              <BsFillArrowUpRightCircleFill
                style={{ marginLeft: "2rem" }}
                size={35}
              />
            }
            lgIcon={<FaCircle style={{ marginLeft: "2rem" }} size={10} />}
            text="Contact Me"
          />
          <Link href="https://www.linkedin.com/in/aya-ahmed-50106914a/">
            <IconButton aria-label="linkedin">
              <FaLinkedinIn color="#61d5ff" />
            </IconButton>
          </Link>
          <Link href="https://github.com/AyaHusein2001">
            <IconButton aria-label="github">
              <FaGithub color="#61d5ff" />
            </IconButton>
          </Link>
        </Box>
      </Box>
      <GsapImage />
    </Box>
  );
};

export default Hero;
