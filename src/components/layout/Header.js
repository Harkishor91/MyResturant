import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/HeaderStyle.css";
import { getData } from "../../localStorage";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const token = getData("TOKEN");

  // handle drawer click
  const drawerClick = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={drawerClick}
      sx={{ textAlign: "center", pr: 2, pl: 2, width: "250px" }}
    >
      <Divider />
      <Typography
        color="goldenrod"
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <FastfoodIcon />
        MyRestaurant
      </Typography>
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        {token && (
          <li>
            <NavLink activeClassName="active" to="/table">
              Book Table
            </NavLink>
          </li>
        )}
        <li>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open-drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "300px",
                },
              }}
              onClick={drawerClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color="goldenrod"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <FastfoodIcon />
              MyRestaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/menu">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/contact">
                    Contact
                  </NavLink>
                </li>

                {token && (
                  <li>
                    <NavLink activeClassName="active" to="/table">
                      Book Table
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink activeClassName="active" to="/login">
                    Login
                  </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={drawerClick}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
