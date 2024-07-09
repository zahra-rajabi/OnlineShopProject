import React from "react";
import { RiDeleteBin4Line } from "react-icons/ri";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useCart } from "../Sources/context/CartContext";

function Quantity({ quantity, product }) {
  const [state, dispatch] = useCart();

  function clickHandler(value) {
    dispatch({ type: value, payload: product });
  }

  return (
    <div className="flex flex-row-reverse gap-2">
      {quantity > 0 && (
        <button
          onClick={() => clickHandler("INCREASE")}
          className="p-1 rounded-lg bg-Red"
        >
          <IoAddSharp className="icon stroke-colorWhite" />
        </button>
      )}
      {quantity > 0 && <p>{quantity}</p>}
      {quantity === 1 && (
        <button
          onClick={() => clickHandler("REMOVE_ITEM")}
          className="p-1 rounded-lg bg-Red"
        >
          <RiDeleteBin4Line className="icon fill-colorWhite" />
        </button>
      )}
      {quantity > 1 && (
        <button
          onClick={() => clickHandler("DECREASE")}
          className="p-1 rounded-lg bg-Red"
        >
          <IoRemoveSharp className="icon stroke-colorWhite" />
        </button>
      )}
    </div>
  );
}

export default Quantity;
