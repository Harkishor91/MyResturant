import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 2 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover":{
              color:'goldenrod',
              fontSize: "62px",
            transition:'all 400sm',

            }
          }}
        >
          {/* social media Icons */}
          <InstagramIcon />
          <TwitterIcon />
          <GitHubIcon />
          <YouTubeIcon />
        </Box>
        {/* using this for show icon &copy; */}
        <Typography
          variant="h5"
          sx={{
            "@media(max-width:600px)": {
              fontSize: "1rem", // 1rem means 16px
            },
          }}
        >
          All Right Reserved &copy; MyRestaurant
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
