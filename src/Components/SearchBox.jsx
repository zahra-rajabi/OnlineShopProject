import { GoSearch } from "react-icons/go";
import { createQueryObject } from "../helpers/helper";
/////////////////////////////
function SearchBox({ search, setSearch, setQuery }) {
  //////////////////////////
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  ////////////////////////
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
