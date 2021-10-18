import "./App.css";
import Home from "./view/Home";
import Navbar from "./view/Navbar";
import { Switch, Route } from "react-router-dom";
import TambahToko from "./components/tambahToko/TambahToko";
import TambahProduk from "./components/tambahProduct/TambahProduk";
import LihatProduk from "./components/lihatProduk/LihatProduk";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/tambah-produk">
          <TambahProduk />
        </Route>
        <Route path="/lihat-produk">
          <LihatProduk />
        </Route>
        <Route path="/tambah-toko">
          <TambahToko />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
