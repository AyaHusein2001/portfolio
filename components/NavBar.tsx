"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import AppBarButton from "./AppBarButton";
import CustomTitle from "./CustomTitle";
import SideBar from "./SideBar";
import { TbMenu } from "react-icons/tb";
interface Props {
  window?: () => Window;
}

const navItems = ["Work", "About", "Contact"];

export default function DrawerAppBar(props: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle: () => void = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ padding: "0px", margin: "0", display: "flex" }}>
      <AppBar
        sx={{ backgroundColor: "black", padding: "0px", margin: "0" }}
        component="nav"
      >
        <Toolbar>
          <CustomTitle title="Aya Ahmed" color="#C7C7C7" size={32} />

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

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}