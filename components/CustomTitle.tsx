import Typography from "@mui/material/Typography";
import { Bebas_Neue } from "next/font/google";
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

import { ReactNode } from "react";

const CustomTitle: React.FC<{
  title: string | ReactNode;
  size: number;
  color: string;
}> = ({ title, size, color }) => {
  return (
    <Typography
      component="div"
      sx={{
        fontFamily: bebasNeue.style.fontFamily,
        flexGrow: 1,
        fontSize: `${size}rem`,
        color: `${color}`,
        padding: 0,
        margin: 0,
        lineHeight: 1,
        paddingBottom: "1.2rem",
      }}
    >
      {title}
    </Typography>
  );
};

export default CustomTitle;
