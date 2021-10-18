import React, { useEffect } from "react";
import { fetchData, fetchProductByKeyword } from "../store/action";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../components/cardToko/CardToko";
import { useState } from "react";

function Home() {
  const dispatch = useDispatch();
  const [searchBox, setSearchBox] = useState("");
  const { listToko, listProduct } = useSelector((state) => {
    return {
      listToko: state.listToko,
      listProduct: state.listProduct,
    };
  });

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    dispatch(fetchProductByKeyword(searchBox));
  }, [searchBox]);

  return (
    <div>
      <h1>Selamat Datang di ALAMIPEDIA</h1>
      <h1>Check Toko Terbaik Kami</h1>
      {listToko.length > 0 ? <Card listToko={listToko} /> : <h1>Toko Tutup</h1>}
      <label>Cari Produk</label>
      <input
        type="text"
        value={searchBox}
        onChange={(e) => {
          setSearchBox(e.target.value);
        }}
      ></input>
      {searchBox ? (
        <div>
          {listProduct ? (
            <table>
              <thead>
                <tr>
                  <th>Nama Produk</th>
                  <th>Satuan</th>
                  <th>Harga Satuan</th>
                  <th>Deskripsi</th>
                </tr>
              </thead>
              <tbody>
                {listProduct.length > 0 ? (
                  listProduct.map((e, index) => {
                    return (
                      <tr key={index}>
                        <td>{e.nama}</td>
                        <td>{e.satuan}</td>
                        <td>{e.hargaSatuan}</td>
                        <td>{e.deskripsi}</td>
                      </tr>
                    );
                  })
                ) : (
                  <h1> Produk yang anda Cari Belum Tersedia :( </h1>
                )}
              </tbody>
            </table>
          ) : (
            <h1> Produk yang anda Cari Belum Tersedia :( </h1>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Home;
