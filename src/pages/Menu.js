import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Layout from "../components/layout/Layout";
import { MenuList } from "../seeds/MenuList";
const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList?.map((item) => {
          return (
            <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
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
                  <Typography variant="h6" gutterBottom component={"div"}>
                    {item?.description}
                  </Typography>
                  <Typography variant="body2" gutterBottom component={"div"}>
                    Rs.{item?.price}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "0 auto",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="success"
                      style={{ margin: "0 10px" }}
                      onClick={()=>alert('add to cart')}

                    >
                      Add to cart
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ margin: "0 10px" }}
                      onClick={()=>alert('remove to cart')}
                    >
                      Remove
                    </Button>
                  </Box>
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
