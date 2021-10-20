import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, addProduct } from "../../store/action";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import "./addProduct.style.css";

function AddProduct() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [sellerId, setSellerId] = useState("");
  const [nama, setNama] = useState("");
  const [satuan, setSatuan] = useState("");
  const [hargaSatuan, setHargaSatuan] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const { status } = useSelector((state) => {
    return {
      status: state.status,
    };
  });

  useEffect(() => {
    if (status) {
      history.push("/");
      dispatch(setStatus());
    }
  }, [status, dispatch, history]);

  function initiateTambahProduk() {
    if (nama && satuan && hargaSatuan && deskripsi) {
      const data = {
        sellerId: +sellerId,
        nama,
        satuan,
        hargaSatuan: +hargaSatuan,
        deskripsi,
      };
      dispatch(addProduct(data));
    } else {
      Swal.fire("Fail!!", "Kamu belum mengisi form dengan lengkap");
    }
  }

  return (
    <div className="textBox">
      <h1>Tambah Produk</h1>
      <div className="form-box">
        <label>Id Penjual</label>
        <input
          type="text"
          value={sellerId}
          onChange={(e) => {
            setSellerId(e.target.value);
          }}
        />
        <label>Nama Produk</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => {
            setNama(e.target.value);
          }}
        />
        <label>Satuan</label>
        <input
          type="text"
          value={satuan}
          onChange={(e) => {
            setSatuan(e.target.value);
          }}
        />
        <label>Harga Satuan</label>
        <input
          type="number"
          value={hargaSatuan}
          onChange={(e) => {
            setHargaSatuan(e.target.value);
          }}
        />
        <label>Deskripsi</label>
        <input
          type="text"
          value={deskripsi}
          onChange={(e) => {
            setDeskripsi(e.target.value);
          }}
        />
        <button
          className="button"
          onClick={() => {
            initiateTambahProduk();
          }}
        >
          Tambah
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
