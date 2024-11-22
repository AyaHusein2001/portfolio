import * as React from "react";
import Button from "@mui/material/Button";
import { Manrope } from "next/font/google";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const CustomContainedButton:React.FC<{text:string,icon?:React.ReactNode}> = ({text,icon}) => {
  return (
    <Button
      sx={{
        backgroundColor: "#D3E97A",
        color: "#0A0A0A",
        borderRadius: "10rem",
        width: "18.7rem",
        height: "5.4rem",
        fontFamily: manrope.style.fontFamily,
        fontSize: "1.6rem",
        fontWeight: "700",
        gap: "15px",
      }}
      variant="contained"
      endIcon={icon}
    >
      {text}
    </Button>
  );
};
export default CustomContainedButton;
