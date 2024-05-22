import { Button } from "@mui/material";
import React from "react";
import { useStateValue } from "./StateProvider";

const CartProduct = ({ id, title, price, image, category }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //Remove item from basket...
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="w-full hover:bg-zinc-100 duration-300 flex gap-3 sm:gap-10 px-5 sm:px-20 mt-5 shadow-md py-5">
      <div className="h-20 w-20 sm:h-32 sm:w-32 flex justify-center">
        <img className="h-full" src={image} alt="" />
      </div>
      <div>
        <h1 className="text-sm sm:text-lg font-bold">{title}</h1>
        <p className="price flex items-center text-sm gap-1">
          <small>₹</small>
          <strong className="font-medium">{price}</strong>
        </p>
        <h3 className="my-2 text-sm opacity-70 font-semibold">{category}</h3>
        <Button onClick={removeFromBasket} variant="contained" color="success">
          Remove from basket
        </Button>
      </div>
    </div>
  );
};

export default CartProduct;
