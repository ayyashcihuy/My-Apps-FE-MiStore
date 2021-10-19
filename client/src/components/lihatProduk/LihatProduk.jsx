import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { fetchProductById } from "../../store/action";

function LihatProduk(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.state.params;
  const { listToko } = useSelector((state) => {
    return { listToko: state.listToko };
  });

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>Lihat Produk Disini</h1>
      <table>
        <tr>
          <th>Nama Produk</th>
          <th>Satuan</th>
          <th>Harga Satuan</th>
          <th>Deskripsi</th>
        </tr>
        {listToko.map((e) => {
          return (
            <tr>
              <td>{e.namaProduk}</td>
              <td>{e.satuan}</td>
              <td>{e.hargaSatuan}</td>
              <td>{e.deskripsi}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default LihatProduk;
