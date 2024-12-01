'use client';
import { useEffect } from "react";
import React from 'react';
import Image from "next/image";
import { Box } from "@mui/material";
import { slideIn } from "@/util/animation";

const GsapImage = () => {
  useEffect(() => {
   slideIn("right", ".animated-image", ".animated-image", 0.5)
  },[]);
  return (
    <Box>
      <Image
        className="animated-image"
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
