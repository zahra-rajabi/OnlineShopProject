import { useState } from "react";
import { GoSearch } from "react-icons/go";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <section className="flex items-center gap-2 my-8">
      <div className="px-2 py-1 tracking-wider rounded-lg bg-colorWhite RedBorder text-Red">
        <input
          type="text"
          className=" focus:outline-none"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase().trim());
          }}
        />
      </div>

      <button className="bg-Red p-1.5 rounded-lg" onClick={searchHandler}>
        <GoSearch className="icon fill-colorWhite" />
      </button>
    </section>
  );
}

export default SearchBox;
