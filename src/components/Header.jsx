function Header() {
  const headerStyle = {
    backgroundColor: "#007bff",
    color: "fff",
    padding: "0",
    textAlign: "center",
    margin: "0",
  };
  const titleStyle = {
    fontSize: "2.5rem",
    textAlign: "center",
    margin: "0",
  };

  return (
    <>
      <nav>
        <header style={headerStyle}>
          <h1>Lancebong Store</h1>
          <p style={titleStyle}>Web TopUp Game Online Terbaik</p>
        </header>
      </nav>
    </>
  );
}

export default Header;
