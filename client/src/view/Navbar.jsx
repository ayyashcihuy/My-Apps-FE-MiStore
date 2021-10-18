import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/">Alamipedia</NavLink>
          <NavLink to="/tambah-toko">Tambah Toko</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
