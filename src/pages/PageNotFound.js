import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";

const PageNotFound = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "68vh",
          "@media(max-width:600px)": {
            mt: 0,
            justifyContent:'center',
             alignItems:'center',
              padding:'10px',
            "& h2": {
              fontSize: "1.5rem",
            },
          
          },
        }}
      >
        <Typography sx={{ color: "red",textAlign:'center',p:5 }} variant="h2" component={"div"}>
          Page Not Found 404
          <WarningIcon sx={{ height: 50, width: 50, marginLeft: 10 }} />
        </Typography>
        
      </Box>
    </Layout>
  );
};

export default PageNotFound;
