function shortenText(value) {
  let newText = value.split(" ").splice(0, 3).join(" ");
  if (newText.length > 25) {
    return newText.split(" ").splice(0, 2).join(" ");
  }
  return newText;
}

export default shortenText;
