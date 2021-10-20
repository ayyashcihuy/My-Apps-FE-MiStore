import "./App.css";
import Home from "./view/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import AddShop from "./view/AddShop/AddShop";
import AddProduct from "./view/AddProduct/AddProduct";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/tambah-produk">
          <AddProduct />
        </Route>
        <Route path="/tambah-toko">
          <AddShop />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
