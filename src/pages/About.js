import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 4,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            fontSize: "2rem",
            my: 3,
          },
          "& p": {
            textAlign: "justify",
            fontSize: "20px",
            fontWeight: 400,
          },
          "@media(max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
            "& p": {
              px: "10px",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To MyResturant</Typography>
        <p>
          MyRestaurant is a culinary haven that tantalizes taste buds with
          exquisite flavors. Nestled in the heart of the city, it's a
          gastronomic destination that celebrates a symphony of global cuisines.
          Our menu is a masterpiece, crafted with passion and creativity,
          offering a fusion of traditional recipes and modern culinary artistry.
          Immerse yourself in a cozy ambiance that merges contemporary design
          with a warm, welcoming atmosphere. Our dedicated team ensures
          impeccable service, making every dining experience memorable. Whether
          it's a romantic dinner, a family gathering, or a casual brunch,
          MyRestaurant promises a journey of delightful indulgence for every
          palate.
        </p>
        <br />
        <p>
          Indulge your senses at MyRestaurant, where culinary artistry meets a
          warm ambiance. Discover a menu that's a symphony of flavors, from
          global classics to innovative creations, all crafted with the finest
          ingredients. Our charming city-center eatery invites you to savor
          every moment, whether it's a romantic evening, a joyful family meal,
          or a casual catch-up with friends. Impeccable service and a blend of
          modern design and cozy comfort create an inviting space for your
          dining pleasure. Experience the essence of exquisite dining at
          MyRestaurant, where every dish tells a story, and every visit becomes
          a cherished memory.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
