import { useHistory } from "react-router";
import "./navbar.style.css";

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
                AlamiStore
              </a>
              <div
                id="bars"
                onClick={() => {
                  toAddSeller();
                }}
              >
                <a href="#" className="navbar__brand__add">
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
