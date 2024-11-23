import * as React from "react";
import Button from "@mui/material/Button";
import { Manrope } from "next/font/google";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const Skill: React.FC<{ text: string; }> = ({
  text,
}) => {
  return (
    <Button
      sx={{
        color: "#fff",
        borderRadius: "10rem",
       
        paddingX: "2.5rem",
        paddingY: "1rem",
        border: "1px solid #484848",
        fontFamily: manrope.style.fontFamily,
        fontSize: "1.6rem",
        fontWeight: "700",
        gap: "15px",
      }}
      variant="outlined"
    >
      {text}
    </Button>
  );
};
export default Skill;
