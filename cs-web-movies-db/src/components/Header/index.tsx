import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        CS IMDb Movies
      </Link>
      <Link className="favorites" to="/favorites">
        Favorites
      </Link>
    </header>
  );
}
