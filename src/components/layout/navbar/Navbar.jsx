import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  let userRol = "user";

  return (
    <div className={"containerNavbar"}>
      <Link to="/">Comision 43290</Link>

      <ul className="categories">
        <Link to="/">Todas</Link>
        <Link to="/category/deportivas">Deportivas</Link>
        <Link to="/category/urbanas">Urbanas</Link>
      </ul>

      {userRol === "admin" && <Link to="/dashboard">ADMIN</Link>}

      <CartWidget />
    </div>
  );
};

export default Navbar;
