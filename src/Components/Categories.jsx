import React from "react";
import { IoListOutline } from "react-icons/io5";
import { createQueryObject } from "../helpers/helper";
import { CategoriesList } from "../constants/CategoriesList";
//////////////////////////////////////
function Categories({ setQuery, query }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const Category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;

    setQuery((query) => createQueryObject(query, { Category }));
  };
  //////////////////////////////////
  return (
    <section className="px-2 rounded-lg bg-colorWhite GrayBorder">
      <div className="flex gap-2 my-4 font-semibold text-Red">
        <IoListOutline className="icon" />
        <h2>Categories</h2>
      </div>
      <ul className="font-semibold" onClick={categoryHandler}>
        {CategoriesList.map((category) => (
          <li
            className={` cursor-pointer p-2 my-1  transition-all duration-300 rounded-lg  ${
              query.Category === category.type.toLowerCase()
                ? " bg-darkBlue text-LightGray hover:bg-darkBlue"
                : "hover:bg-LightGray"
            }`}
            key={category.id}
          >
            {category.type}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
