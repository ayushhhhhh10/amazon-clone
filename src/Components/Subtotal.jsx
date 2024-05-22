import { Button } from "@mui/material";
import React from "react";

const Subtotal = ({ length, total }) => {
  return (
    <div className="shadow-lg flex flex-col h-[25vh] px-6 justify-center">
      <h1 className="text-xl font-semibold">
        Subtotal ({length} items)
        <span className="text-lg font-bold ml-1">₹{total}</span>
      </h1>
      <div className="mb-3">
        <input type="checkbox" /> This order contains a gift
      </div>
      <Button variant="contained">
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default Subtotal;
