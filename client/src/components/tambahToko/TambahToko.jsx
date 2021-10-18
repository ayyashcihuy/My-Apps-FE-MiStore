import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, tambah_Toko, fetchData } from "../../store/action";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useEffect } from "react";

function TambahToko() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [nama, setNama] = useState("");
  const [kota, setKota] = useState("");
  const { status } = useSelector((state) => {
    return {
      status: state.status,
    };
  });

  useEffect(() => {
    if (status) {
      history.push("/");
      dispatch(setStatus());
      dispatch(fetchData());
    }
  }, [status]);

  function submitData() {
    if (nama !== "" && kota !== "") {
      const data = {
        nama,
        kota,
      };
      dispatch(tambah_Toko(data));
    } else {
      Swal.fire("Fail!!", "Kamu belum mengisi form dengan lengkap");
    }
  }
  return (
    <div>
      <h1>Tambah Toko</h1>
      <label>Nama Toko</label>
      <input
        type="text"
        value={nama}
        onChange={(e) => {
          setNama(e.target.value);
        }}
      ></input>
      <label>Kota Asal</label>
      <input
        type="text"
        value={kota}
        onChange={(e) => {
          setKota(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          submitData();
        }}
      >
        Simpan
      </button>
    </div>
  );
}

export default TambahToko;
