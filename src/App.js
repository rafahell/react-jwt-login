import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { loadUser } from "./store/actions/authActions";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import NotFound404 from "./components/NotFound404";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </main>
  );
}

export default App;
