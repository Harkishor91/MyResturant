import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import { getData, saveData, removeData } from "../localStorage";
import Layout from "../components/layout/Layout";

const CART_KEY = "cartItems";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = getData(CART_KEY) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    saveData(CART_KEY, updatedCartItems); // Save updated cart to storage
  };

  const handleCheckout = () => {
    removeData(CART_KEY); // Clear cart from storage
    setCartItems([]); // Clear cart from state
  };

  const isCartEmpty = cartItems.length === 0;

  // Calculate the grand total
  const grandTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Layout>
      <Box sx={{ p: 3 }}>
        {isCartEmpty ? (
          <Typography variant="h6">Your cart is empty.</Typography>
        ) : (
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Typography variant="h5" sx={{ width: "100%" }}>
              Items in your cart:
            </Typography>
            {cartItems.map((item) => (
              <Card
                sx={{
                  maxWidth: "300px",
                  display: "flex",
                  m: 2,
                  p: 2,
                  borderRadius: "10px",
                  flexDirection: "row",
                  bgcolor: "#BEBEBE",
                }}
                key={item?.id}
              >
                <CardActionArea>
                  <CardMedia
                    sx={{
                      height: "150px",
                      width: "250px",
                      objectFit: "cover",
                    }}
                    component="img"
                    src={item?.image}
                    alt={item?.name}
                  />
                  <CardContent
                    sx={{
                      flexDirection: "row",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <Typography variant="h6" gutterBottom component="div">
                        {item?.name}
                      </Typography>
                      <Typography variant="body2" gutterBottom component="div">
                        {item?.description}
                      </Typography>
                      <Typography variant="body2" gutterBottom component="div">
                        Rs.{item?.price}
                      </Typography>
                    </div>

                    <IconButton
                      aria-label="delete"
                      onClick={() => handleDelete(item.id)}
                      sx={{ color: "red" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        )}
        <div>
          {!isCartEmpty && (
            <CardContent>
              <Typography variant="h5" sx={{ color: "green" }}>
                Grand Total:{grandTotal} Rs.
              </Typography>
            </CardContent>
          )}
        </div>
        <Button variant="contained" color="primary" onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
      </Box>
    </Layout>
  );
};

export default AddToCart;
