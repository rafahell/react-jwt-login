import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../store/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  FormGroup,
  TextField,
  Button,
  Container,
  Alert,
} from "@mui/material";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
// const REGISTER_URL = "/users/";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const auth = useSelector((state) => state.auth);

  // const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  // useEffect(() => {
  //   setErrMsg("");
  // }, [email, user, pwd, matchPwd]);

  useEffect(() => {
    if (auth._id) return navigate("/login");
  }, [auth, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);

    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
      return;
    }
    const arrUser = {
      email: email,
      username: user,
      password: pwd,
      re_password: matchPwd,
    };
    setErrMsg("User Registered Success");
    setUser("");
    setPwd("");
    setMatchPwd("");
    setEmail("");
    // console.log(arrUser);
    dispatch(signUp(arrUser));
    setTimeout(() => {
      navigate("/login");
    }, 1200);

    // try {
    // const response = await axios.post(
    //   REGISTER_URL,
    // JSON.stringify({
    //   email: email,
    //   username: user,
    //   password: pwd,
    //   re_password: matchPwd,
    // })
    // );
    // console.log(response.data);
    // console.log(JSON.stringify(response.data));

    //clear input fields
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("No server response");
    //   } else if (err.response?.status === 400) {
    //     setErrMsg("Username Taken");
    //   } else {
    //     setErrMsg("Registration Failed");
    //   }
    //   errRef.current.focus();
    // }
  };
  return (
    <Container>
      {/* <Typography
        ref={errRef}
        className={errMsg ? "errmsg" : "opffscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </Typography> */}
      <Alert
        ref={errRef}
        severity="error"
        style={{ marginBottom: "20px", marginTop: "20px" }}
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
        Register
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <FormGroup>
          {/* <label htmlFor="username">Username</label> */}
          <TextField
            type="text"
            id="username"
            variant="outlined"
            label="Username"
            style={{ marginBottom: "10px" }}
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <Alert
            id="uidnote"
            severity="warning"
            style={{ marginBottom: "20px" }}
            sx={
              userFocus && user && !validName
                ? { display: "block" }
                : { display: "none" }
            }
          >
            4 to 24 characters. <br /> Must begin with a letter. <br />
            Letter, numbers underscores, hypens allowed.
          </Alert>
          {/* <p
          id="uidnote"
          className={
            userFocus && user && !validName ? "instructions" : "offscreen"
          }
        >
          4 to 24 characters. <br /> Must begin with a letter. <br />
          Letter, numbers underscores, hypens allowed.
        </p> */}

          {/* <label htmlFor="email">Email</label> */}
          <TextField
            type="email"
            id="email"
            variant="outlined"
            label="Email"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="emailnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <Alert
            id="emailnote"
            severity="warning"
            style={{ marginBottom: "20px" }}
            sx={
              emailFocus && email && !validEmail
                ? { display: "block" }
                : { display: "none" }
            }
          >
            4 to 24 characters. <br /> Must begin with a letter. <br />
            Letter, numbers underscores, hypens allowed.
          </Alert>
          {/* <p
          id="emailnote"
          className={
            emailFocus && email && !validEmail ? "instructions" : "offscreen"
          }
        >
          4 to 24 characters. <br /> Must begin with a letter. <br />
          Letter, numbers underscores, hypens allowed.
        </p> */}

          {/* <label htmlFor="password">Password</label> */}
          <TextField
            type="password"
            id="password"
            variant="outlined"
            label="Password"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <Alert
            id="pwdnote"
            severity="warning"
            style={{ marginBottom: "20px" }}
            sx={
              pwdFocus && !validPwd ? { display: "block" } : { display: "none" }
            }
          >
            8 to 24 characters. <br /> Must include upopercase and lowercase
            letters, a number and special character.
            <br />
            Allowed special characters{" "}
            <span aria-label="exlamation mark"></span>
            !,
            <span aria-label="at symbol"></span>@,
            <span aria-label="hashtag"></span>#,
            <span aria-label="dollar sign"></span>$,
            <span aria-label="percent"></span>%,
          </Alert>
          {/* <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
        >
          8 to 24 characters. <br /> Must include upopercase and lowercase
          letters, a number and special character.
          <br />
          Allowed special characters <span aria-label="exlamation mark"></span>
          !,
          <span aria-label="at symbol"></span>@,
          <span aria-label="hashtag"></span>#,
          <span aria-label="dollar sign"></span>$,
          <span aria-label="percent"></span>%,
        </p> */}

          {/* <label htmlFor="confirm_pwd">Confirm Password</label> */}
          <TextField
            type="password"
            id="confirm_pwd"
            variant="outlined"
            label="Confirm Password"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <Alert
            id="confirmnote"
            severity="warning"
            style={{ marginBottom: "20px" }}
            sx={
              matchFocus && !validMatch
                ? { display: "block" }
                : { display: "none" }
            }
          >
            Must match the first password input field.
          </Alert>
          {/* <p
          id="confirmnote"
          className={matchFocus && !validMatch ? "instructions" : "offscreen"}
        >
          Must match the first password input field.
        </p> */}

          <Button
            variant="contained"
            disabled={
              !validName || !validPwd || !validMatch || !validEmail
                ? true
                : false
            }
            type="submit"
          >
            Register
          </Button>
        </FormGroup>
      </form>

      <Typography
        align="center"
        variant="subtitle2"
        style={{ marginTop: "25px" }}
      >
        Already registered? <br />
        <Link to="/login">Sign In</Link>
      </Typography>
    </Container>
  );
};

export default Register;
