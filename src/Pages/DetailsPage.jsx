import React from "react";
import { useParams } from "react-router-dom";
import { useProductDetails } from "../Sources/context/ProductContext";
import { FaLink } from "react-icons/fa6";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";

import { Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { IoPricetag } from "react-icons/io5";

function DetailsPage() {
  const { id } = useParams();
  const product = useProductDetails(+id);

  {
    if (!product) return <Loader />;
  }
  return (
    <section className="flex justify-between gap-8 my-8 ">
      <div className="w-1/3 p-4 rounded-lg h-80 bg-colorWhite RedBorder flexCenter">
        <img src={product.image} alt={product.title} className="w-2/3 h-full" />
      </div>
      <section className="flex flex-col justify-between w-2/3 p-4 rounded-lg GrayBorder ">
        <div>
          <h3 className="mb-8 text-2xl font-semibold text-Red">
            {product.title}
          </h3>
          <p className="w-3/5 my-6 leading-relaxed text-zinc-700">
            {product.description}
          </p>
          <p className="flex items-center gap-2 my-4 ">
            <FaLink className="size-4 text-Red" />
            <span className="font-semibold">{product.category}</span>
          </p>
        </div>
        <div className="flex items-center justify-between justify-self-end">
          <span className="gap-2 py-2 font-semibold flexCenter ">
            <IoPricetag className="text-Red size-4 " />
            <span className="text-xl">{product.price} $</span>
          </span>
          <Link
            to="/products"
            className="gap-4 px-4 py-2 text-white rounded-lg flexCenter bg-Red"
          >
            <FaLongArrowAltLeft className=" size-4" />
            <span>back to shop</span>
          </Link>
        </div>
      </section>
    </section>
  );
}

export default DetailsPage;
