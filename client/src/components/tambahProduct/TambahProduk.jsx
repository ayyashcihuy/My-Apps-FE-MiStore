import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, tambah_Produk } from "../../store/action";
import Swal from "sweetalert2";
import { useHistory, useLocation } from "react-router";

function TambahProduk() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [namaProduk, setNamaProduk] = useState("");
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
    if (namaProduk && satuan && hargaSatuan && deskripsi) {
      const data = {
        sellerId: location.state.params,
        namaProduk,
        satuan,
        hargaSatuan: +hargaSatuan,
        deskripsi,
      };
      dispatch(tambah_Produk(data));
    } else {
      Swal.fire("Fail!!", "Kamu belum mengisi form dengan lengkap");
    }
  }

  return (
    <div>
      <h1>Tambah Produk</h1>
      <label>Nama Produk</label>
      <input
        type="text"
        value={namaProduk}
        onChange={(e) => {
          setNamaProduk(e.target.value);
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
        type="text"
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
        onClick={() => {
          initiateTambahProduk();
        }}
      >
        Tambah
      </button>
    </div>
  );
}

export default TambahProduk;
