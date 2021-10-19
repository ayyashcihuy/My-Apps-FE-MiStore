import "./navbar.style.css";
import { useHistory } from "react-router";

function Navbar() {
  const history = useHistory();

  function toHome() {
    history.push("/");
  }

  function toAddSeller() {
    history.push("/tambah-toko");
  }
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/">Alamipedia</NavLink>
          <NavLink to="/tambah-toko">Tambah Toko</NavLink>
        </div>
      </nav> */}
      <header>
        <div className="container">
          <nav className="navbar">
            <div className="navbar__brand">
              <a
                href="#"
                className="navbar__brand__logo"
                onClick={() => {
                  toHome();
                }}
              >
                AlamiStore.
              </a>
              <div
                id="bars"
                onClick={() => {
                  toAddSeller();
                }}
              >
                <a href="#" className="navbar__brand__add">
                  <span
                    class="iconify"
                    data-icon="ion:add-circle-outline"
                  ></span>
                  Tambah Toko
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
