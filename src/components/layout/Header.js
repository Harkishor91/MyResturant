import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { getData, isUserLogin, logoutUser } from "../../localStorage";
import "../../styles/HeaderStyle.css";

const Header = () => {
  const CART_KEY = "cartItems";
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  // Handle drawer click
  const drawerClick = () => {
    setMobileOpen(!mobileOpen);
  };

  // Check login status on component mount
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await isUserLogin();
        setIsUser(loggedIn);
      } catch (error) {
        console.log("User is not logged in.");
        setIsUser(false);
        console.error("Error checking login status", error);
      }
    };

    checkLoginStatus();
  }, []);

  // Handle logout
  const handleLogout = async () => {
    try {
      // Confirm logout action
      const result = await swal({
        title: "Are you sure?",
        text: "You will be logged out and the cart will be emptied.",
        icon: "warning",
        buttons: ["Cancel", "Logout"],
        dangerMode: true,
      });

      if (result) {
        // Clear cart items from local storage
        localStorage.removeItem(CART_KEY);

        // Perform the logout operation
        await logoutUser();
        setIsUser(false);

        // Notify user about successful logout
        swal(
          "Logged out!",
          "You have been logged out successfully.",
          "success"
        ).then(() => {
          navigate("/login");
        });
      }
    } catch (error) {
      console.error("Error logging out", error);
      swal(
        "Error!",
        "There was an issue logging out. Please try again.",
        "error"
      );
    }
  };

  useEffect(() => {
    const storedCartItems = getData(CART_KEY) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  });

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
        {!isCartEmpty && (
          <li>
            <NavLink activeClassName="active" to="/addToCart">
              {`Cart (${cartItems.length})`}
            </NavLink>
          </li>
        )}
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
        {/* {isUser && (
          <li>
            <NavLink activeClassName="active" to="/table">
              Book Table
            </NavLink>
          </li>
        )} */}

        {isUser ? (
          <li>
            <NavLink
              activeClassName="active"
              to="/login"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
          </li>
        )}
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
                {!isCartEmpty && (
                  <li>
                    <NavLink activeClassName="active" to="/addToCart">
                      {`Cart (${cartItems.length})`}
                    </NavLink>
                  </li>
                )}
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
                {/* 
                {isUser && (
                  <li>
                    <NavLink activeClassName="active" to="/table">
                      Book Table
                    </NavLink>
                  </li>
                )} */}

                {isUser ? (
                  <li>
                    <NavLink
                      activeClassName="active"
                      to="/login"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink activeClassName="active" to="/login">
                      Login
                    </NavLink>
                  </li>
                )}
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
