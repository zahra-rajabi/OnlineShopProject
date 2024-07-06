function Layout({ children }) {
  return (
    <>
      <header className="p-4 my-4 text-lg rounded-lg bg-Red text-colorWhite">
        <h1>Online Shop</h1>
      </header>
      {children}
      <footer className="p-4 tracking-wider text-center rounded-lg bg-darkBlue text-Red">
        <p>Developed by Zahra 🪐</p>
      </footer>
    </>
  );
}

export default Layout;
