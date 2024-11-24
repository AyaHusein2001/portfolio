"use client";
import * as React from "react";
import { Manrope } from "next/font/google";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";
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
      style={{
        backgroundColor: "#61d5ff",
        color: "#0A0A0A",
        borderRadius: "10rem",
        width: "fit-content",
        paddingRight: "2.5rem",
        paddingLeft: "2.5rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: manrope.style.fontFamily,
        fontSize: "1.6rem",
        fontWeight: "700",
      }}
    >
      {text} {icon}
    </Link>
  );
};
export default CustomContainedButton;
