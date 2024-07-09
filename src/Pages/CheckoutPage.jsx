import React from "react";
import { useCart } from "../Sources/context/CartContext";
import { FaHashtag, FaRegCheckCircle } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { productQuantity, shortenText } from "../helpers/helper";
import Quantity from "../Components/Quantity";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  function clickHandler() {
    dispatch({ type: "CECKOUT" });
  }

  return (
    <main className="flex justify-between gap-4 my-8">
      <nav className="flex flex-col justify-between w-1/5 p-2 rounded-lg RedBorder h-52 ">
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-Red">
              <GoChecklist />
              <span className="font-medium">Total:</span>
            </div>
            <span>{state.total} $</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-Red">
              <FaHashtag />
              <span className="font-medium">Quantity:</span>
            </div>
            <span>{state.ItemCounter}</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-Red">
              <FaRegCheckCircle />
              <span className="font-medium">Status:</span>
            </div>
            {!state.CheckOut ? (
              <span> Pending... </span>
            ) : (
              <span>in process...</span>
            )}
          </li>
        </ul>

        <div className="mx-1 my-2">
          <button
            className="w-full px-4 py-2 rounded-lg bg-Red"
            onClick={clickHandler}
          >
            Checkout
          </button>
        </div>
      </nav>
      <section className="w-3/4 space-y-2 rounded-lg">
        {!state.selectedItems.length && (
          <div className="h-full px-4 py-2 text-2xl rounded-lg text-darkBlue">
            Nothing in your basket ! back to shop...
          </div>
        )}
        {state.selectedItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 py-2 GrayBorder bg-colorWhite"
          >
            <img src={item.image} alt={item.title} className="w-10 h-10" />
            <h3>{shortenText(item.title)}</h3>
            <h3>{item.price} $</h3>
            <Quantity quantity={item.quantity} product={item} />
          </div>
        ))}
      </section>
    </main>
  );
}

export default CheckoutPage;
