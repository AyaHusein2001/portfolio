import { TextField } from '@mui/material'
import React from 'react'
import { Manrope } from "next/font/google";
const manrope = Manrope({ weight: "400", subsets: ["latin"] });

const CustomTextField:React.FC<{
    multiline:boolean,
    label:string
}> = ({multiline,label}) => {
  return (
    <TextField
    multiline={multiline}
    sx={{
      backgroundColor: "#1A1A1A",
      width: "50rem",
      marginBottom:'2.4rem',
      "& .MuiInputLabel-root": { color: "#C7C7C7",fontSize:'1.6rem' },
      "& .MuiInputLabel-root.Mui-focused": { color: "#FFFFFF" },
      "& .MuiFilledInput-root": { 
        fontFamily: manrope.style.fontFamily, 
        color: "#FFFFFF", 
        height: multiline ? "auto" : "5rem",
        minHeight:multiline ? "8rem" : "5rem",
        padding: multiline ? "auto" : "1.2rem",
       
        fontSize:'1.8rem',
        fontWeight:'40rem'
      },
      "& .MuiFilledInput-root::after": { borderBottomColor: "#FFFFFF" }, 
    }}
    label={label}
    variant="filled"
  />
  )
}

export default CustomTextField
