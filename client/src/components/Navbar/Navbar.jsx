import "./navbar.style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__brand">
              <NavLink to="/" className="navbar__brand__logo">
                AlamiStore
              </NavLink>
              <div id="bars">
                <NavLink to="/tambah-toko" className="navbar__brand__add">
                  Tambah Toko
                </NavLink>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
