import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./shared/SearchBar";
import Container from "./shared/Container";

function About() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Container>
        <SearchBar onChange={setSearch} value={search} />
        <p>Pagina About muestra contenido muy about About nada</p>
        <Link to="/">Home</Link>
      </Container>
    </div>
  );
}

export default About;
