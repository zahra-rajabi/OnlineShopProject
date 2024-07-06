import { useProduct } from "../Sources/context/ProductContext";
import Card from "../Components/Card";
import Categories from "../Components/Categories";
import SearchBox from "../Components/SearchBox";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
import { filterProduct, searchProducts } from "../helpers/helper";
// // // // // // // // // // // //
function ProductsPage() {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const Products = useProduct();
  const [query, setQuery] = useState([]);

  useEffect(() => {
    setDisplayed(Products);
  }, [Products]);

  const searchHandler = () => {
    setQuery((query) => ({ ...query, search }));
  };
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const Category = event.target.innerText.toLowerCase();

    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, Category }));
  };

  useEffect(() => {
    let FinalProduct = searchProducts(Products, query.search);
    let FilteredProduct = filterProduct(FinalProduct, query.Category);
    setDisplayed(FilteredProduct);
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
