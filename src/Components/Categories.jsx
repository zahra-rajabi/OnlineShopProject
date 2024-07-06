import React from "react";
import { IoListOutline } from "react-icons/io5";

function Categories({ categoryHandler }) {
  return (
    <section className="p-4 rounded-lg bg-colorWhite GrayBorder">
      <div className="flex gap-2 mb-4 font-semibold text-Red">
        <IoListOutline className="icon" />
        <h2>Categories</h2>
      </div>
      <ul className="space-y-2 font-semibold" onClick={categoryHandler}>
        <li>All</li>
        <li>Electronics</li>
        <li>Jewelery</li>
        <li>Men's Clothing</li>
        <li>Women's Clothing</li>
      </ul>
    </section>
  );
}

export default Categories;
