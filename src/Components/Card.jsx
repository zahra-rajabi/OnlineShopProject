import React from "react";
import { productQuantity, shortenText } from "../helpers/helper";
import { Link } from "react-router-dom";
import { RiListCheck2, RiDeleteBin4Line } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5";
import { useCart } from "../Sources/context/CartContext";

function Card({ product }) {
  const { id, title, image, price } = product;
  const [state, dispatch] = useCart();

  function clickHandler(value) {
    dispatch({ type: value, payload: product });
  }

  const quantity = productQuantity(state, id);

  return (
    <section className="w-[24%] p-2 rounded-lg bg-colorWhite GrayBorder">
      <div className="p-4 mb-6 flexCenter">
        <img src={image} alt={title} className="w-48 h-48" />
      </div>
      <h3 className="mb-2 font-semibold text-Red">{shortenText(title)}</h3>
      <p>
        {price} <b>$</b>
      </p>

      <div className="flex items-center justify-between mt-4">
        <Link to={`/Products/${id}`}>
          <RiListCheck2 className="icon fill-Red" />
        </Link>
        <div className="flex flex-row-reverse gap-2">
          {!quantity ? (
            <button
              onClick={() => clickHandler("ADD_ITEM")}
              className="p-1 rounded-lg bg-Red"
            >
              <TbShoppingBagCheck className="icon stroke-colorWhite" />
            </button>
          ) : (
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
      </div>
    </section>
  );
}

export default Card;
