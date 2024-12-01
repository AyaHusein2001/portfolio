"use client";
import { createTheme } from "@mui/material/styles";
import { Manrope } from "next/font/google";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const manrope = Manrope({ weight: "400", subsets: ["latin"] });
// manipulating theme
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
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A1A1A",
          marginBottom: "2.4rem",
          width: "100%", // Default width
          [`@media (min-width:600px)`]: {
            width: "30rem",
          },
          [`@media (min-width:1280px)`]: {
            width: "50rem",
          },
          "& .MuiInputLabel-root": {
            color: "#C7C7C7",
            fontSize: "1.6rem",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#FFFFFF",
          },
          "& .MuiFilledInput-root": {
            fontFamily: manrope.style.fontFamily,
            color: "#FFFFFF",
            fontSize: "1.8rem",
            fontWeight: "400",
          },
          "& .MuiFilledInput-root.Mui-focused::after": {
            borderBottomColor: "#FFFFFF",
          },
        },
      },
    },

    MuiListItemButton: {
      styleOverrides: {
        root: {
          textAlign: "center",
        },
      },
    },

    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "2rem",
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
