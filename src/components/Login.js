import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Button,
  Container,
  Alert,
  FormGroup,
} from "@mui/material";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const auth = useSelector((state) => state.auth);

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  // const [success, setSuccess] = useState();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  useEffect(() => {
    if (auth._id) return navigate("/welcome");
  }, [auth, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const arrUser = {
      username: user,
      password: pwd,
    };

    dispatch(signIn(arrUser));
    setUser("");
    setPwd("");
  };

  return (
    <Container>
      <Alert
        ref={errRef}
        severity="error"
        style={{ marginBottom: "20px" }}
        sx={errMsg ? { display: "block" } : { display: "none" }}
        aria-live="assertive"
      >
        {errMsg}
      </Alert>
      <Typography
        variant="h4"
        align="center"
        style={{ marginTop: "20px", marginBottom: "25px" }}
      >
        Sign in
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          {/* <InputLabel htmlFor="username">Username</InputLabel> */}
          <TextField
            variant="outlined"
            label="Username"
            style={{ marginBottom: "10px" }}
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />

          {/* <InputLabel htmlFor="password">Password</InputLabel> */}
          <TextField
            variant="outlined"
            label="Password"
            style={{ marginBottom: "10px" }}
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />

          <Button
            variant="contained"
            color="primary"
            disabled={!user || !pwd ? true : false}
            type="submit"
          >
            SIGN IN
          </Button>
        </FormGroup>
      </form>
      <Typography
        align="center"
        variant="subtitle2"
        style={{ marginTop: "25px" }}
      >
        Need an Account?
        <br />
        <Link to="/register">Sign Up</Link>
      </Typography>
    </Container>
  );
};

export default Login;
