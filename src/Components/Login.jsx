import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        if (authUser) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        if (auth) {
          history("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="flex flex-col items-center my-10">
      <Link to="/">
        <img
          className="w-32"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTqelfT3Q70M2iInPWfIW9GGpoKiQX0IRBT6HwQTOmA&s"
          alt=""
        />
      </Link>
      <div className="border-2 rounded-md p-5 w-80">
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <form className="mt-4">
          <h2 className="text-xs font-semibold">Email</h2>
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border border-black rounded-sm w-full mb-2 p-1 text-sm"
            type="text"
          />
          <h2 className="text-xs font-semibold">Password</h2>
          <input
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            className="border border-black rounded-sm w-full p-1 text-sm"
            type="password"
          />
        </form>
        <button
          type="submit"
          onClick={signIn}
          className="bg-[#f0c14b] w-full font-semibold text-sm py-1 my-4 rounded-sm text-zinc-900"
        >
          Sign In
        </button>
        <p className="text-xs">
          By signing-in you agree to the Amazon CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <h1 className="mt-4 text-sm underline text-blue-800">
          Don't have an account?
        </h1>
        <button
          type="submit"
          onClick={register}
          className="bg-zinc-700 w-full font-semibold text-sm py-1 mt-2 mb-2 rounded-sm text-white"
        >
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
