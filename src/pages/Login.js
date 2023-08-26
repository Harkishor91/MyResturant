import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography, TextField, Button,  } from "@mui/material";

const Login = () => {
  const handleLogin = () => {
    // Handle the login logic here
    alert('Hello')
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          my:10
        }}
      >
    
        <Typography variant="h4" >
          Login
        </Typography>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          sx={{width:'30%'}}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          sx={{width:'30%'}}
        />
        <Button variant="contained" color="primary" sx={{width:'30%',py:1.8}} onClick={handleLogin}>
          Login
        </Button>
        </Box>
    </Layout>
  );
};

export default Login;
