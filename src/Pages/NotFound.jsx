import React from "react";

import { Link } from "react-router-dom";
function clickHandler() {
  body.classList.remove("overflow-hidden");
}
function NotFound() {
  const body = document.body;
  body.classList.add("overflow-hidden");
  return (
    <div className="absolute inset-0 flex-col bg-center bg-cover bg-notFound flexCenter selection:select-none">
      <div className="mb-4 text-5xl font-bold text-Red">404 Not Found !</div>
      <div className="mb-8 text-xl tracking-wide text-colorWhite ">
        The page you are looking for does not exist !
      </div>
      <div className="px-4 py-2 font-semibold tracking-wide transition-all duration-200 rounded-lg cursor-pointer hover:text-Red hover:bg-darkBlue bg-Gray text-darkBlue">
        <Link to={"/Products"} onClick={clickHandler}>
          back to home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
