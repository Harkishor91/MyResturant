import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useLogin } from "../hooks/authHooks";
import { getData } from "../localStorage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const navigate = useNavigate();
  const token = getData("TOKEN");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          my: 10,
        }}
      >
        <Typography variant="h4">Login</Typography>
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          margin="normal"
          sx={{ width: "30%" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          sx={{ width: "30%" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "30%", py: 1.8 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        {loginMutation.isError && (
          <Typography color="error">{loginMutation.error.message}</Typography>
        )}
      </Box>
    </Layout>
  );
};

export default Login;
