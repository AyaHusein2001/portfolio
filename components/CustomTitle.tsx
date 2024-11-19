import Typography from "@mui/material/Typography";
import { Bebas_Neue } from "next/font/google";
import { ReactNode } from "react";
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

const CustomTitle: React.FC<{ title: string | ReactNode; size: number; color: string }> = ({
  title,
  size,
  color,
}) => {
  return (
    <Typography
      component="div"
      sx={{
        fontFamily: bebasNeue.style.fontFamily,
        flexGrow: 1,
        fontSize: `${size}px`,
        display: { sm: "block" },
        color: `${color}`,
        padding:0,
        margin:0,
        lineHeight:1,
      }}
    >
      {title}
    </Typography>
  );
};

export default CustomTitle;
