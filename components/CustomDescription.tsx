import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Manrope } from "next/font/google";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const CustomDescription: React.FC<{
  description: string;
  size: number;
  color: string;
  width?: number;
  xsWidth?: number;
}> = ({ description, size, color, width,xsWidth }) => {
  return (
    <Box sx={{ width: { xs: `${xsWidth}rem`, lg: `${width}rem` }  }}>
      <Typography
        component="div"
        sx={{
          fontFamily: manrope.style.fontFamily,
          flexGrow: 1,
          fontSize: `${size}rem`,
          display: { sm: "block" },
          color: `${color}`,
          padding: 0,
          margin: 0,

          fontWeight: "40rem",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default CustomDescription;
