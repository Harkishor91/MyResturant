import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          ml: 10,
          pr:5,
          "& h4": {
            fontWeight: "bold",
            mb: 2,
          },

        }}
      >
        <Typography variant="h4">Contact MyResturant</Typography>
        <p>
          Discover MyRestaurant, nestled in the breathtaking landscapes of
          Himachal Pradesh, India. Indulge in an unforgettable dining experience
          that combines the finest flavors with the serene ambiance of this
          stunning region. Our restaurant, located at the heart of Himachal
          Pradesh, welcomes you with a blend of exquisite tastes and a warm,
          inviting atmosphere. For reservations, inquiries about our diverse
          menu, or to plan your special events, reach out to us. Whether it's a
          romantic date, a family celebration, or a casual gathering, our
          dedicated team ensures every visit becomes a cherished memory. Your
          culinary journey begins amidst the beauty of Himachal Pradesh at
          MyRestaurant.
        </p>
      </Box>
      <Box sx={{m:3,width:'600px', ml:10 ,"@media(max-width:600px)":{
        width:"300px"
      }}}>
        {/* Table for Contact details with Resturant */}
        <TableContainer component={Paper}>
          <Table aria-aria-label="conatct table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", mx: 2 }} /> 180 00 180
                  00 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", mx: 2 }} />
                  helpMyResturant@gmai.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", mx: 2 }} />
                  9876543210 (available 24X7)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
