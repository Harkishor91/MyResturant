import React from "react";
import Layout from "../components/layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { menuList } from "../seeds/MenuList";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:'flex', flexWrap:"wrap", justifyContent:'center'}}>
        {menuList?.map((item) => {
          return (
            <Card sx={{ maxWidth: "390px", display: "flex" ,m:2}}>
              <CardActionArea>
                <CardMedia
                  sx={{ minHeight: "300px" }}
                  component={"img"}
                  src={item?.image}
                  alt={item?.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {item?.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom component={"div"}>
                  Rs.{item?.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
    </Layout>
  );
};

export default Menu;
