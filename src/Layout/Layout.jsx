import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useCart } from "../Sources/context/CartContext";

function Layout({ children }) {
  const [state] = useCart();

  return (
    <>
      <header className="flex items-center justify-between p-4 my-4 text-lg rounded-lg bg-Red text-colorWhite">
        <Link to="/Products">Online Shop</Link>
        {!!state.ItemCounter && (
          <Link to="/Checkout" className="relative flex">
            <div className="p-1 rounded-md bg-colorWhite">
              <HiOutlineShoppingCart className="size-6 stroke-Red" />
            </div>
            <span className=" size-5 text-[10px] font-bold flexCenter rounded-full bg-darkBlue text-LightGray absolute -top-2 -right-3 ">
              {state.ItemCounter}
            </span>
          </Link>
        )}
      </header>
      {children}
      <footer className="p-4 tracking-wider text-center rounded-lg bg-darkBlue text-Red">
        <p>Developed by Zahra 🪐</p>
      </footer>
    </>
  );
}

export default Layout;
