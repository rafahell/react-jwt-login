import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container } from "@mui/material";

const NotFound404 = () => {
  return (
    <Container style={{ padding: "100px" }}>
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: "20px", marginBottom: "25px" }}
      >
        Oops!
      </Typography>
      <Typography
        variant="h2"
        align="center"
        style={{ marginTop: "20px", marginBottom: "25px" }}
      >
        Page Not Found
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        style={{ marginTop: "20px", marginBottom: "25px" }}
      >
        <Link align="center" to="/">
          Visit Our Homepage
        </Link>
      </Typography>
    </Container>
  );
};

export default NotFound404;
