import DeleteIcon from "@mui/icons-material/Delete";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import Layout from "../components/layout/Layout";
import { getData, removeData, saveData } from "../localStorage";

const CART_KEY = "cartItems";

const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = getData(CART_KEY) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleDelete = async (itemId) => {
    // Confirm delete item  action
    const result = await swal({
      title: "Are you sure?",
      text: "You want to delete this item from your cart ",
      icon: "warning",
      buttons: ["Cancel", "Remove"],
      dangerMode: true,
    });
    if (result) {
      swal(
        "Delete Item",
        "Item deleted from your cart successfully.",
        "success"
      )
        .then(() => {
          const updatedCartItems = cartItems.filter(
            (item) => item.id !== itemId
          );
          setCartItems(updatedCartItems);
          saveData(CART_KEY, updatedCartItems); // Save updated cart to storage
        })
        .catch((err) => {
          swal(
            "Error!",
            "There was an issue to delete item. Please try again.",
            "error"
          );
        });
    }
  };

  const handleCheckout = async () => {
    const result = await swal({
      title: "Are you sure?",
      text: "You want to order these items.",
      icon: "success",
      buttons: ["Cancel", "Confirm"],
      dangerMode: true,
    });
    if (result) {
      swal("Success!", "your order placed successfully", "success")
        .then(() => {
          removeData(CART_KEY); // Clear cart from storage
          setCartItems([]); // Clear cart from state
        })
        .catch((err) => {
          swal(
            "Error!",
            "There was an issue with place your order. Please try again.",
            "error"
          );
        });
    }
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
