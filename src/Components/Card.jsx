import React from "react";
import shortenText from "../helpers/helper";
import { Link } from "react-router-dom";
import { RiListCheck2 } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";

function Card({ product }) {
  const { id, title, image, price } = product;

  return (
    <section className=" w-[24%] bg-colorWhite GrayBorder rounded-lg self-stretch p-2">
      <div className="flexCenter mb-6 p-4">
        <img src={image} alt={title} className="w-48 h-48" />
      </div>
      <h3 className="text-Red font-semibold mb-2">{shortenText(title)}</h3>
      <p>
        {price} <b>$</b>
      </p>

      <div className="flex justify-between items-center mt-4">
        <Link to={`/Products/${id}`}>
          <RiListCheck2 className="icon fill-Red" />
        </Link>
        <button className="bg-Red rounded-lg  p-1">
          <TbShoppingBagCheck className="icon stroke-colorWhite" />
        </button>
      </div>
    </section>
  );
}

export default Card;
