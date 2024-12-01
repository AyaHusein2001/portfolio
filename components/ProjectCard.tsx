"use client";

import { useEffect, useRef } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { Manrope } from "next/font/google";
import {scale} from '../util/animation'


const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const ProjectCard: React.FC<{
  image: string;
  title: string;
  projectType: string;
}> = ({ image, title, projectType }) => {

  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      scale(cardRef.current);
    }
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        backgroundColor: "#1A1A1A",
        width: { xs: "34.3rem", lg: "60rem" },
        height: { xs: "34.3rem", lg: "45rem" },
        borderRadius: "1.2rem",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        alignSelf: "center",
      }}
    >
      <Button
        sx={{
          backgroundColor: "#0A0A0A",
          color: "#fff",
          borderRadius: "10rem",
          fontFamily: manrope.style.fontFamily,
          fontSize: "1.4rem",
          fontWeight: "500",
          paddingLeft: "1.6rem",
          paddingRight: "1.6rem",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          marginTop: "1.6rem",
          marginLeft: "1.6rem",
        }}
        
      >
        {projectType}
      </Button>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          style={{
            borderRadius: "2rem",
            width: "80%",

            height: "auto", // Keeps the aspect ratio
          }}
        />
      </Box>
    </Box>
  );
};

export default ProjectCard;
