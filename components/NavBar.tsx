"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBarButton from "./AppBarButton";
import CustomTitle from "./CustomTitle";
import SideBar from "./SideBar";
import { TbMenu } from "react-icons/tb";
import { Typography } from "@mui/material";

const navItems = ["Work", "About", "Contact"];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle: () => void = () => {
    console.log('hi side bar')
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ padding: "0px", margin: "0px", display: "flex" }}>
      <AppBar
        sx={{ backgroundColor: "black", padding: "0px", margin: "0px" }}
        component="nav"
      >
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
        {/* <CustomTitle title="Aya Ahmed" color="#ffffff" size={7} /> */}
        <Typography variant="h1"  sx={{fontSize:'3.2rem'}}>
            Aya Ahmed
          </Typography>

          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: "#C7C7C7", mr: 2, display: { lg: "none" } }}
          >
            
            <TbMenu color="#C7C7C7" size={44} />
          </IconButton>

          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {navItems.map((item) => (
              <AppBarButton key={item} item={item} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <SideBar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />

      <Box component="main" >
        <Toolbar />
      </Box>
    </Box>
  );
}
