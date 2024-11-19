import * as React from "react";
import Button from "@mui/material/Button";
import { Manrope } from "next/font/google";
import { FaCircle } from "react-icons/fa";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const CustomContainedButton = () => {
  return (
    <Button
      sx={{
        backgroundColor: "#D3E97A",
        color: "#0A0A0A",
        borderRadius: "100px",
        width: "187px",
        height: "54px",
        fontFamily: manrope.style.fontFamily,
        fontSize: "16px",
        fontWeight: "700",
        gap: "15px",
      }}
      variant="contained"
      endIcon={<FaCircle size={10} />}
    >
      Contact Me
    </Button>
  );
};
export default CustomContainedButton;
