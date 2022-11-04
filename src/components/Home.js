import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container style={{ marginTop: "25px" }}>
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: "20px", marginBottom: "25px" }}
      >
        User Auth with JWT
      </Typography>
      <br />
      <Typography
        align="center"
        style={{ marginTop: "20px", marginBottom: "15px" }}
      >
        <Link to="/login" underline="hover">
          Sign In
        </Link>
      </Typography>

      <Typography
        align="center"
        style={{ marginTop: "20px", marginBottom: "15px" }}
      >
        <Link to="/register" underline="hover">
          Register
        </Link>
      </Typography>
    </Container>
  );
};

export default Home;
