import actionType from "./actionType";
import axios from "axios";
import Swal from "sweetalert2";

//Alami Test
const jsonServerUrl1 = "http://localhost:3000/addSeller";
const jsonServerUrl2 = "http://localhost:3000/addProduct";

export const setData = (data) => {
  return {
    type: actionType.FETCH_DATA,
    payload: data,
  };
};

export const setProduct = (data) => {
  return {
    type: actionType.SET_PRODUCT,
    payload: data,
  };
};

export const setStatus = () => {
  return {
    type: actionType.SET_STATUS,
  };
};

export const fetchProductByKeyword = (data) => {
  return (dispatch) => {
    axios
      .get(
        `https://dev.dummy-api.alamisharia.co.id/searchProductByKeyword?keyword=${data}`
      )
      .then(({ data }) => {
        dispatch(setProduct(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchDataById = (id) => {
  return (dispatch) => {
    axios
      .get(jsonServerUrl2)
      .then(({ data }) => {
        const result = data.filter((e) => e.sellerId === id);
        dispatch(setData(result));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get(jsonServerUrl1)
      .then(({ data }) => {
        dispatch(setData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const tambah_Toko = (data) => {
  return (dispatch) => {
    console.log(data, "dari action");
    axios({
      method: "POST",
      url: jsonServerUrl1,
      data,
    })
      .then(({ data }) => {
        dispatch(setData(data));
        dispatch(setStatus());
        Swal.fire("Success!", "Berhasil Menambah Penjual");
      })
      .catch((err) => {
        Swal.fire(
          `${err.response.status} !! ${err.response.statusText}`,
          "Silahkan Coba Lagi"
        );
      });
  };
};

export const tambah_Produk = (data) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: jsonServerUrl2,
      data,
    })
      .then(({ data }) => {
        Swal.fire("Success!", "Berhasil Menambah Produk");
        dispatch(setStatus());
      })
      .catch((err) => {
        Swal.fire(
          `${err.response.status} !! ${err.response.statusText}`,
          "Silahkan Coba Lagi"
        );
      });
  };
};
