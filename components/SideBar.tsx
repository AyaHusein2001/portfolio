import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import Link from "next/link";

const drawerWidth = 240;

const SideBar: React.FC<{
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}> = ({ mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href="/about#experience">
              <ListItemText primary="Work" />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Link href="#about">
              <ListItemText primary="About" />
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <Link href="#lets-connect">
              <ListItemText primary="Contact" />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <nav>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile. A property of the Modal component that controls whether the modal content stays mounted in the DOM even when the modal is closed.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#000000",
            color: "#fff",
            paddingTop: "3rem",
          },
        }}
      >
        {drawer}
      </Drawer>
    </nav>
  );
};

export default SideBar;
