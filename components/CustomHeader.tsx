import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Manrope } from "next/font/google";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

import { ReactNode } from "react";

const CustomHeader: React.FC<{
  title: string | ReactNode;
  size: number;
  color: string;
  weight: number;
  paddingBottom?: number;
  width?: number;
  xsWidth?: number;
}> = ({ title, size, color, weight, paddingBottom, width, xsWidth }) => {
  return (
    <Box sx={{ width: { xs: `${xsWidth}rem`, lg: `${width}rem` } }}>
      <Typography
        component="div"
        sx={{
          fontFamily: manrope.style.fontFamily,
          flexGrow: 1,
          fontSize: `${size}rem`,
          color: `${color}`,
          paddingBottom:
            paddingBottom !== undefined ? `${paddingBottom}rem` : 0,
          margin: 0,
          // lineHeight: '44.8px',
          fontWeight: `${weight}px`,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CustomHeader;
