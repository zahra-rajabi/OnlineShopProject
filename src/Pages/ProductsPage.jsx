import { useProduct } from "../Sources/context/ProductContext";
import Card from "../Components/Card";
import Categories from "../Components/Categories";
import SearchBox from "../Components/SearchBox";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
import {
  createQueryObject,
  filterProduct,
  getInitialQuery,
  searchProducts,
} from "../helpers/helper";
import { useSearchParams } from "react-router-dom";
// // // // // // // // // // // //
function ProductsPage() {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const Products = useProduct();
  const [query, setQuery] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(Products);
    setQuery(getInitialQuery(searchParams));
  }, [Products]);

  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const Category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { Category }));
  };

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let FinalProduct = searchProducts(Products, query.search);
    FinalProduct = filterProduct(FinalProduct, query.Category);
    setDisplayed(FinalProduct);
  }, [Products, query]);

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <main className="flex gap-4 mb-8 ">
        {!displayed.length && <Loader />}
        {!!displayed.length && (
          <section className="flex flex-wrap w-4/5 gap-3 h-fit">
            {displayed.map((Product) => (
              <Card key={Product.id} product={Product} className="flex-1" />
            ))}
          </section>
        )}
        <nav className="w-1/5 h-screen ">
          <Categories categoryHandler={categoryHandler} />
        </nav>
      </main>
    </>
  );
}

export default ProductsPage;
