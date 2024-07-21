import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import { MenuList } from "../seeds/MenuList";
import {  saveData, getData, removeData } from "../localStorage";

const CART_KEY = 'cartItems';

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from local storage on component mount
    const storedCartItems = getData(CART_KEY) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleAddToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    saveData(CART_KEY, updatedCartItems);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
    saveData(CART_KEY, updatedCartItems);
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList?.map((item) => {
          const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

          return (
            <Card
              sx={{ maxWidth: "390px", display: "flex", m: 2 }}
              key={item?.id}
            >
              <CardActionArea>
                <CardMedia
                  sx={{
                    height: "300px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  component="img"
                  src={item?.image}
                  alt={item?.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component="div">
                    {item?.name}
                  </Typography>
                  <Typography variant="h6" gutterBottom component="div">
                    {item?.description}
                  </Typography>
                  <Typography variant="body2" gutterBottom component="div">
                    Rs.{item?.price}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      margin: "0 auto",
                    }}
                  >
                    {!isInCart ? (
                      <Button
                        variant="contained"
                        color="success"
                        style={{ margin: "0 10px" }}
                        onClick={() => handleAddToCart(item)}
                      >
                        Add to cart
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="error"
                        style={{ margin: "0 10px" }}
                        onClick={() => handleRemoveFromCart(item)}
                      >
                        Remove
                      </Button>
                    )}
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
