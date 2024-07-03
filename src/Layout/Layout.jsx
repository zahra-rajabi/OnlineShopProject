function Layout({ children }) {
  return (
    <>
      <header className="bg-Red text-colorWhite p-4 rounded-lg my-4 text-lg">
        <h1>Online Shop</h1>
      </header>
      {children}
      <footer className="bg-darkBlue p-4 text-center rounded-lg text-Red tracking-wider ">
        <p>Developed by Zahra 🪐</p>
      </footer>
    </>
  );
}

export default Layout;
