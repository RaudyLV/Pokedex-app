import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <Link to="/" className="logo">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
              alt="Pokeball"
            />
            <h1>Pokedex</h1>
          </Link>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {/* Aquí se renderizan las páginas según la ruta */}
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            Datos proporcionados por:{" "}
            <a
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokeAPI
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};
