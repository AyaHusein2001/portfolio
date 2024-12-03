"use client";
import { Box, IconButton, Typography } from "@mui/material";

import { FaCircle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CustomContainedButton from "./CustomContainedButton";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

import GsapImage from "./GsapImage";
import { useEffect } from "react";
import accounts from "@/data/accounts";
import { charByChar, slideIn } from "@/util/animation";


// Helper function to wrap each character in a span
const wrapText = (text: string) => {
  return text.split("").map((char, i) => (
    <span key={i} style={{ opacity: 0 }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};
const Hero = () => {
  useEffect(() => {
    slideIn("left", ".hi", ".hi", 0.5);
    slideIn("left", ".description", ".description", 0.5);
    slideIn("up", ".buttons", ".buttons", 0.5);
    charByChar(".name");
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
          </Typography>
          <Typography className="name" variant="h1">
            {wrapText("Aya Ahmed.")}
          </Typography>
        </Box>

        <Typography className="description" variant="h6">
          A full-stack developer passionate about creating responsive,
          user-friendly web applications and innovative software solutions.
        </Typography>

        <Box
          className="buttons"
          sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
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

          <Link href={accounts.linkedin}>
            <IconButton aria-label="linkedin">
              <FaLinkedinIn color="#61d5ff" />
            </IconButton>
          </Link>
          <Link href={accounts.github}>
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
