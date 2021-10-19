import actionType from "./actionType";
import axios from "axios";
import Swal from "sweetalert2";

//Alami Test

export const setData = (data) => {
  return {
    type: actionType.FETCH_DATA,
    payload: data,
  };
};

export const resetList = () => {
  console.log("mashok");
  return {
    type: actionType.RESET_DATA,
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

export const fetchProductById = (id) => {
  return (dispatch) => {
    axios
      .get(
        `https://dev.dummy-api.alamisharia.co.id/listProductBySellerId?seller_id=${id}
      `
      )
      .then(({ data }) => {
        dispatch(setData(data.data));
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
      url: "https://dev.dummy-api.alamisharia.co.id/addSeller",
      data,
    })
      .then(({ data }) => {
        console.log(data);
        dispatch(setStatus());
        Swal.fire("Success!", "Berhasil Menambah Penjual");
      })
      .catch((err) => {
        console.log(err);
        // Swal.fire(
        //   `${err.response.status} !! ${err.response.statusText}`,
        //   "Silahkan Coba Lagi"
        // );
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    console.log(data, "ini data mentah");
    axios({
      method: "POST",
      url: "https://dev.dummy-api.alamisharia.co.id/addProduct",
      data,
    })
      .then(({ data }) => {
        console.log(data, "ini data");
        Swal.fire("Success!", "Berhasil Menambah Produk");
        dispatch(setStatus());
      })
      .catch((err) => {
        console.log(err.response);
        // Swal.fire(
        //   `${err.response.status} !! ${err.response.statusText}`,
        //   "Silahkan Coba Lagi"
        // );
      });
  };
};
