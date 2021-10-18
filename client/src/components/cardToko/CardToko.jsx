import React from "react";
import "./card.styles.css";
import "./card-list.styles.css";
import { useHistory } from "react-router";

export const Card = (props) => {
  const history = useHistory();

  function goToTambahProduk(params) {
    history.push("/tambah-produk", { params });
  }

  function goToLihatProduk(params) {
    history.push("/lihat-produk", { params });
  }

  return (
    <div className="card-list">
      {props.listToko.map((e, index) => {
        return (
          <div className="card-container" key={e.id}>
            <h1>{e.nama}</h1>
            <h4>{e.kota}</h4>
            <button
              onClick={() => {
                goToTambahProduk(e.id);
              }}
            >
              Tambah Produk
            </button>
            <button
              onClick={() => {
                goToLihatProduk(e.id);
              }}
            >
              Lihat Produk
            </button>
          </div>
        );
      })}
    </div>
  );
};
