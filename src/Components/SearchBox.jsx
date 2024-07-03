import { useState } from "react";
import { GoSearch } from "react-icons/go";

function SearchBox() {
  const [search, setSearch] = useState("");
  const searchHandler = () => {
    console.log(search);
  };
  return (
    <section className="flex items-center gap-2 my-8">
      <div className="bg-colorWhite py-1 px-2 RedBorder text-Red rounded-lg tracking-wider">
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
