import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  };
  return (
    <div className="h-16 bg-[#131921] text-white flex items-center justify-between sm:p-5 py-2 px-4 sticky top-0 w-full z-[999]">
      <Link to="/">
        <img
          className="w-20 sm:w-28 mix-blend-difference hover:border"
          src="src/assets/LOGO.jpg"
          alt=""
        />
      </Link>
      <div className="search-bar h-10 rounded-md overflow-hidden items-center w-1/2 hidden sm:flex">
        <input
          className="text-black text-xs h-full w-full px-2"
          type="text"
          placeholder="Search Amazon.in"
        />
        <div className="bg-[#F3A847] text-zinc-800 h-full p-2 flex items-center justify-center">
          <SearchIcon />
        </div>
      </div>
      {/*3 links*/}
      <div className="links flex gap-0 sm:gap-5 items-center">
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className="hover:border flex flex-col tracking-tight leading-tight px-2 py-1"
          >
            <span className="text-xs font-light">
              {user ? `Hello ${user.email}` : "Hello Guest"}
            </span>
            <span className="font-semibold text-sm">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link>
          <div className="hover:border flex-col tracking-tight leading-tight px-2 py-1 hidden sm:flex">
            <span className="text-xs font-light">Returns</span>
            <span className="font-semibold text-sm">& Orders</span>
          </div>
        </Link>
        <Link>
          <div className="hover:border flex-col tracking-tight leading-tight px-2 py-1 hidden sm:flex">
            <span className="text-xs font-light">Your</span>
            <span className="font-semibold text-sm">Prime</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="hover:border text-white ml-0 sm:ml-5 p-2 flex gap-1">
            <ShoppingBasket />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
