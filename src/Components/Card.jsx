import React from "react";
import { shortenText } from "../helpers/helper";
import { Link } from "react-router-dom";
import { RiListCheck2 } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
import { useCart } from "../Sources/context/CartContext";

function Card({ product }) {
  const { id, title, image, price } = product;
  const [state, dispatch] = useCart();
  console.log(state);
  function clickHandler(params) {
    dispatch({ type: "ADD_ITEM", payload: product });
  }

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
        <button onClick={clickHandler} className="p-1 rounded-lg bg-Red">
          <TbShoppingBagCheck className="icon stroke-colorWhite" />
        </button>
      </div>
    </section>
  );
}

export default Card;
