"use client";
import { createTheme } from "@mui/material/styles";
import { Manrope } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const theme = createTheme({
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#484848",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#222222", 
          width: "5.4rem", 
          height: "5.4rem", 
          "&:hover": {
            backgroundColor: "#333333", 
          },
        },
      },
    },
    

    MuiListItemButton: {
      styleOverrides: {
        root: {
          textAlign: 'center', 
        },
      },
    },
    
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: '2rem',
          fontWeight: 'bold',
          padding: '2rem', 
        },
      },
    },

  },
  typography: {
    h1: {
      fontFamily: bebasNeue.style.fontFamily,
      fontSize: `10.1rem`,
      paddingBottom: "1.2rem",
      lineHeight: 1,
      color: `#fff`,
    },
    h2: {
      fontFamily: manrope.style.fontFamily,
      fontSize: `3.2rem`,
      fontWeight: "500",
      color: `#fff`,
    },
    h6: {
      fontFamily: manrope.style.fontFamily,
      fontSize: "1.6rem",
      color: "#C7C7C7",
      fontWeight: 400,
    },
  },
});

export default theme;
