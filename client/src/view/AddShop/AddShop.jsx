import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus, addShop } from "../../store/action";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import { useEffect } from "react";
import "./addShop.style.css";

function AddShop() {
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
    }
  }, [status, dispatch, history]);

  function submitData() {
    if (nama !== "" && kota !== "") {
      const data = {
        nama,
        kota,
      };
      dispatch(addShop(data));
    } else {
      Swal.fire("Fail!!", "Kamu belum mengisi form dengan lengkap");
    }
  }
  return (
    <div className="textBox">
      <h1>Tambah Toko</h1>
      <div className="form-box">
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
    </div>
  );
}

export default AddShop;
