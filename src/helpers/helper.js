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

export { shortenText, searchProducts, filterProduct };
