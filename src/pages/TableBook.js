import React from "react";
import Layout from "../components/layout/Layout";
import { CardActionArea, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "../styles/TableBook.css";
import { tableData } from "../seeds/tableData";

const TableBook = () => {
  return (
    <Layout>
      <p className="heading">Book Table</p>
      <div className="container">
        {tableData.map((table) => (
          <div className="cardWrapper" key={table.id}>
            <Card
              sx={{
                margin: "10px",
                padding: "10px",
                backgroundColor: "goldenrod",
                borderRadius: 2,
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontWeight: 600,
                    }}
                  >
                    {table.tableNumber}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: 600,
                      fontSize: 16,
                    }}
                  >
                    {table.userName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default TableBook;
