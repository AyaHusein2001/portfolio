'use client';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import React from 'react';
import Image from "next/image";
import { Box } from "@mui/material";

const GsapImage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    
    gsap.set(".animated-image", { x: "100%" });

    
    gsap.to(".animated-image", {
      scrollTrigger: {
        trigger: ".animated-image", 
        start: "top 80%", 
        toggleActions: "restart none none none",
      },
      x: 0,
      duration: 2,
      ease: "power2.out", 
    });
  }, []);

  return (
    <Box>
      <Image
        className="animated-image" // Add class for GSAP targeting
        src="https://drive.google.com/uc?export=view&id=14M1AjMqOlYOhNwKw5DCCLrmqEXTHTNsq"
        alt="aya"
        width={500}
        height={600}
        style={{ borderRadius: "2rem" }}
      />
    </Box>
  );
};

export default GsapImage;
