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
    
    gsap.set(".hi", { x: "-100%" });
    gsap.to(".hi", {
      scrollTrigger: {
        trigger: ".hi", 
        toggleActions: "restart none none none",
      },
      x: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.to(".name span", {
      opacity: 1,
      y: 0,
      stagger: 0.1, 
      duration: 2,
      ease: "power2.out",
      delay: 1, 
      repeat:-1

    });

    gsap.set(".description", { x: "-200%" });
    gsap.to(".description", {
      scrollTrigger: {
        trigger: ".description",
        
        toggleActions: "restart none none none",
      },
      x: 0,
      duration: 2,
      ease: "power2.out",
      delay:1
    });

  }, []);

  // Helper function to wrap each character in a span
  const wrapText = (text: string) => {
    return text.split("").map((char, i) => (
      <span key={i} style={{ opacity: 0, transform: "translateY(20px)" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };
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
          </Typography>
          <Typography className="name" variant="h1">
            {wrapText("Aya Ahmed.")}
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
