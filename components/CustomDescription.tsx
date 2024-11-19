import Typography from "@mui/material/Typography";
import { Manrope } from "next/font/google";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const CustomDescription: React.FC<{ description: string; size: number; color: string }> = ({
  description,
  size,
  color,
}) => {
  return (
    <Typography
      component="div"
      sx={{
        fontFamily: manrope.style.fontFamily,
        flexGrow: 1,
        fontSize: `${size}px`,
        display: { sm: "block" },
        color: `${color}`,
        padding:0,
        margin:0,
        inlineSize: {xs:'25rem',lg:'34rem'},
        overflowWrap: 'break-word',
      }}
    >
      {description}
    </Typography>
  );
};

export default CustomDescription;
