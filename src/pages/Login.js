import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { loginUser, loginUserInfo, registerUser } from "../localStorage";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState("login");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPhone, setRegisterPhone] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const userInfo = await loginUserInfo();
      alert(JSON.stringify(userInfo));
      if (userInfo) {
        setIsLoggedIn(true);
      }
    };
    checkUser();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await loginUser(loginEmail, loginPassword);
      setIsLoggedIn(true);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await registerUser(
        registerName,
        registerEmail,
        registerPhone,
        registerPassword
      );
      setView("login");
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleView = () => {
    setView(view === "login" ? "register" : "login");
    setError("");
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
        {view === "login" ? (
          <>
            <Typography variant="h4">Login</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              sx={{ width: "30%" }}
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ width: "30%" }}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "30%", py: 1.8 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Button onClick={toggleView} sx={{ mt: 2 }}>
              Don't have an account? Register
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h4">Register</Typography>
            {error && <Typography color="error">{error}</Typography>}
            <TextField
              id="name"
              label="Name"
              type="text"
              variant="outlined"
              margin="normal"
              sx={{ width: "30%" }}
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              sx={{ width: "30%" }}
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <TextField
              id="phone"
              label="Phone Number"
              type="text"
              variant="outlined"
              margin="normal"
              sx={{ width: "30%" }}
              value={registerPhone}
              onChange={(e) => setRegisterPhone(e.target.value)}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              sx={{ width: "30%" }}
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "30%", py: 1.8 }}
              onClick={handleRegister}
            >
              Register
            </Button>
            <Button onClick={toggleView} sx={{ mt: 2 }}>
              Already have an account? Login
            </Button>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Login;
