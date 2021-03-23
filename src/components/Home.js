import Contador from "./Contador";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./shared/SearchBar";
import Container from "./shared/Container";

function Home() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Container>
        <SearchBar onChange={setSearch} value={search} />
        <Contador initial="5" />
        <Contador initial="15" />
        <Contador initial="10" />
        <Link to="/about">ABOUT</Link>
      </Container>
    </div>
  );
}

export default Home;
