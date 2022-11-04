import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { Typography, Container, Button, Alert } from "@mui/material";
import { getUser, signOut } from "../store/actions/authActions";

const Welcome = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate("/login");
  };

  useEffect(() => {
    if (auth._id) return navigate("/welcome");
  }, [auth, navigate]);

  useEffect(() => {
    // console.log(auth);
    dispatch(getUser(localStorage.getItem("token")));
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: "20px", marginBottom: "25px" }}
      >
        Welcome
      </Typography>
      <Alert
        sx={{ width: 1 / 2, letterSpacing: 2 }}
        severity="info"
        style={{ marginBottom: "20px", wordBreak: "break-all" }}
        aria-live="assertive"
      >
        <strong>{auth._id ? "User id: " + auth._id : ""}</strong>
        <br />
        <strong>{auth.username ? "Username: " + auth.username : ""}</strong>
        <br />
        <strong>{auth.username ? "Email: " + auth.email : ""}</strong>
        <br />
        <strong>
          {localStorage.getItem("token")
            ? "Token: " + localStorage.getItem("token")
            : ""}
        </strong>
      </Alert>
      <Button
        variant="contained"
        style={{ marginTop: "20px", marginBottom: "25px" }}
        onClick={() => handleSignOut()}
      >
        Logout
      </Button>
    </Container>
  );
};

export default Welcome;
