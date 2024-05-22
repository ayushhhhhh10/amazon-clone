import { Button } from "@mui/material";
import React from "react";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, rating, image, category }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    //Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
        category: category,
      },
    });
  };

  return (
    <div className="relative p-5 bg-white w-80 rounded-lg shadow-xl flex flex-col items-center justify-center hover:bg-zinc-100 duration-300">
      <img className="w-[35vh] h-[35vh]" src={image} alt={title} />
      <div className="info flex flex-col gap-1 mt-5">
        <h1 className="text-md font-bold">{title}</h1>
        <p className="price flex items-center text-sm gap-1">
          <small>₹</small>
          <strong className="font-medium">{price}</strong>
        </p>
        <div className="rating flex mb-2 items-center">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
          <h3 className="opacity-70 text-sm font-semibold ml-auto">
            {category}
          </h3>
        </div>
        <Button onClick={addToBasket} variant="contained" color="success">
          Add to basket
        </Button>
      </div>
    </div>
  );
};

export default Product;
