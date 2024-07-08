function shortenText(value) {
  let newText = value.split(" ").splice(0, 3).join(" ");
  if (newText.length > 25) {
    return newText.split(" ").splice(0, 2).join(" ");
  }
  return newText;
}

function searchProducts(products, searchValue) {
  if (!searchValue) return products;
  const searched = products.filter((p) =>
    shortenText(p.title).toLowerCase().includes(searchValue)
  );
  return searched;
}

function filterProduct(products, category) {
  if (!category || category === "all") return products;
  const filtered = products.filter((p) => p.category === category);
  return filtered;
}

function createQueryObject(currentQuery, newQuery) {
  if (newQuery.Category === "all") {
    let { Category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    let { search, ...rest } = currentQuery;
    return rest;
  }

  return { ...currentQuery, ...newQuery };
}

function getInitialQuery(searchParams) {
  const existedQuery = {};
  const search = searchParams.get("search");
  const Category = searchParams.get("Category");
  if (Category) existedQuery.Category = Category;
  if (search) existedQuery.search = search;
  return existedQuery;
}

function sumProducts(product) {
  const ItemCounter = product.reduce(
    (counter, product) => counter + product.quantity,
    0
  );
  const total = product
    .reduce(
      (totalPrice, product) => totalPrice + product.price * product.quantity,
      0
    )
    .toFixed(2);

  return { ItemCounter, total };
}
export {
  shortenText,
  searchProducts,
  filterProduct,
  createQueryObject,
  getInitialQuery,
  sumProducts,
};
