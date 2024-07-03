import { useProduct } from "../Sources/context/ProductContext";
import Card from "../Components/Card";
import Categories from "../Components/Categories";
import SearchBox from "../Components/SearchBox";
import Loader from "../Components/Loader";
function ProductsPage() {
  const Products = useProduct();

  return (
    <>
      {!Products.length && <Loader />}
      {!!Products.length && (
        <section>
          <SearchBox />
          <main className="flex my-8 gap-4">
            <section className="w-4/5 flex flex-wrap items-center gap-y-3 justify-between ">
              {Products.map((Product) => (
                <Card key={Product.id} product={Product} className="flex-1" />
              ))}
            </section>
            <nav className="w-1/5">
              <Categories />
            </nav>
          </main>
        </section>
      )}
    </>
  );
}

export default ProductsPage;
