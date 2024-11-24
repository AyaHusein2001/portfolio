"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBarButton from "./AppBarButton";
import SideBar from "./SideBar";
import { TbMenu } from "react-icons/tb";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle: () => void = () => {
    
    setMobileOpen((prevState) => !prevState);
  };



  return (
    <Box sx={{ padding: "0px", marginBottom: "5.2rem", display: "flex" }}>
      <AppBar
        sx={{ backgroundColor: "black", padding: "0px", margin: "0px" }}
        component="nav"
      >
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Link href='/'>
          
        <Typography  variant="h1"  sx={{fontSize:'3.2rem'}}>
            Aya Ahmed
          </Typography>
          </Link>

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "#C7C7C7", mr: 2, display: { lg: "none" } }}
          >
            
            <TbMenu color="#C7C7C7" size={44} />
          </IconButton>

          <Stack direction='row' gap={3.2} sx={{ display: { xs: "none", lg: "flex" } }}>
           
              <AppBarButton  link="/about#experience" item="Work" />
              <AppBarButton  link='#about' item="About" />
              <AppBarButton  link='#lets-connect' item="Contact" />
            
          </Stack>
        </Toolbar>
      </AppBar>

      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />

    </Box>
  );
}
