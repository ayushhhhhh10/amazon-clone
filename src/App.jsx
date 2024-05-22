import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Checkout from "./Components/Checkout";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./Components/StateProvider";

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        //the user just logged in...
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
};

export default App;
