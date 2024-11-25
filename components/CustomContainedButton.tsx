"use client";
import * as React from "react";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
import classes from "./classes.module.css";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const CustomContainedButton: React.FC<{
  text: string;
  xsIcon?: React.ReactNode;
  lgIcon?: React.ReactNode;
  link: string;
}> = ({ text, xsIcon, lgIcon, link }) => {
  const isLargeScreen = useMediaQuery("(min-width:1200px)");
  const icon = isLargeScreen ? lgIcon : xsIcon;
  return (
    <Link
      href={link}
      className={classes['button-link']}
      style={{
        fontFamily: manrope.style.fontFamily,
      }}
    >
      {text} {icon}
    </Link>
  );
};
export default CustomContainedButton;
