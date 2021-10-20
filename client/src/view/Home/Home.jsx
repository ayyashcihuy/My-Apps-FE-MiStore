import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  fetchProductById,
  fetchProductByKeyword,
  resetList,
} from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import ViewProduct from "../../components/ViewProduct/ViewProduct";
import "./home.style.css";

function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchBy, setSearchBy] = useState("searchByKeyword");
  const [searchBox, setSearchBox] = useState("");
  const { listProduct } = useSelector((state) => {
    return {
      listToko: state.listToko,
      listProduct: state.listProduct,
    };
  });

  useEffect(() => {
    if (searchBy === "searchByKeyword" && searchBy) {
      dispatch(resetList());
      dispatch(fetchProductByKeyword(searchBox));
    } else if (searchBy === "searchById" && searchBy) {
      dispatch(resetList());
      dispatch(fetchProductById(searchBox));
    }
  }, [searchBox, searchBy, dispatch]);

  function goToAddProduct() {
    history.push("/tambah-produk");
  }

  return (
    <section>
      <div>
        <div className="textBox">
          <h1>AlamiStore</h1>
          <p>
            Alami Store adalah tempat kamu bisa membuka tokomu sendiri serta
            menambahkan produk yang kamu inginkan
          </p>
          <br />
          <div>
            {/**
             * bug: ganti jadi navlink router
             */}
            <a
              href="#"
              className="addProduct"
              onClick={() => {
                goToAddProduct();
              }}
            >
              Tambah Produkmu
            </a>
          </div>
          <div>
            <div>
              <select
                className="box"
                id="searchBy"
                name="searchBy"
                onChange={(e) => {
                  setSearchBy(e.target.value);
                }}
              >
                <option value="searchByKeyword">Search By Keyword</option>
                <option value="searchById">Search By Seller Id</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Cari yang kamu mau"
              className="searchBox"
              value={searchBox}
              onChange={(e) => {
                setSearchBox(e.target.value);
              }}
            ></input>
            {searchBox ? (
              <div>
                {listProduct ? (
                  <ViewProduct />
                ) : (
                  <h4> Produk yang anda Cari Belum Tersedia :( </h4>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
