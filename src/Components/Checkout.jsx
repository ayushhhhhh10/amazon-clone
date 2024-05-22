import React from "react";
import Navbar from "./Navbar";
import { useStateValue } from "./StateProvider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import Subtotal from "./Subtotal";
import { getBasketTotal } from "./Reducer";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div>
      <Navbar />
      <div>
        <div className="w-full flex">
          <img
            className="h-[30vh] w-full sm:w-[70%] object-cover object-center"
            src={"/images/banner_image.jpg"}
            alt=""
          />
          <img
            className="h-[40vh] w-[30%] object-cover hidden sm:block"
            src={"/images/banner_image_2.jpg"}
            alt=""
          />
        </div>
        {basket?.length === 0 ? (
          <div className="w-full sm:px-20 px-10 mt-5 sm:mt-0">
            <h3>{user && `Hello ${user.email}`}</h3>
            <h1 className="text-3xl font-semibold">
              Your Shopping Cart is Empty
            </h1>
            <p className="mb-5">
              You have no items in your basket. To buy one "Add to basket" next
              to the item.
            </p>
            <Link to="/">
              <Button variant="contained">Go to Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="mt-5 sm:mt-0">
            <h3 className="sm:text-md text-sm font-semibold mx-5 sm:mx-20">
              {user && `Hello ${user.email}`}
            </h3>
            <h1 className="sm:text-2x text-md font-bold mb-3 mx-5 sm:mx-20">
              Your Shopping Basket
            </h1>
            <hr />
            <div className="w-full max-h-[82vh] block sm:flex gap-5">
              <div className="w-full sm:w-[70%] overflow-auto">
                {basket.map((item, index) => (
                  <CartProduct
                    key={index}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    category={item.category}
                  />
                ))}
              </div>
              <div className="w-full sm:w-[30%]">
                <Subtotal
                  length={basket.length}
                  total={getBasketTotal(basket)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
