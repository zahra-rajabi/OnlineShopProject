import React from "react";
import { IoListOutline } from "react-icons/io5";

function Categories() {
  return (
    <section className="bg-colorWhite rounded-lg p-4 GrayBorder">
      <div className="text-Red flex  gap-2 font-semibold mb-4">
        <IoListOutline className="icon" />
        <h2>Categories</h2>
      </div>
      <ul className="space-y-2 font-semibold">
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
