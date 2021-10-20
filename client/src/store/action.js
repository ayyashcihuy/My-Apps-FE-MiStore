import actionType from "./actionType";
import axios from "axios";
import Swal from "sweetalert2";

//Alami Test API

export const setData = (data) => {
  return {
    type: actionType.FETCH_DATA,
    payload: data,
  };
};

export const resetList = () => {
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
      .catch(() => {
        dispatch(setData([]));
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
      .catch(() => {
        dispatch(setData([]));
      });
  };
};

export const addShop = (data) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://dev.dummy-api.alamisharia.co.id/addSeller",
      data,
    })
      .then(({ data }) => {
        dispatch(setStatus());
        Swal.fire({
          icon: "success",
          title: "Success",
          html: `<p>Berhasil Menambahkan Toko!</p></br><p>ID Toko: ${data.data.id}</p></br><small>Mohon simpan ID Toko untuk menggunakan fitur lainnya.</small>`,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
};

export const addProduct = (data) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "https://dev.dummy-api.alamisharia.co.id/addProduct",
      data,
    })
      .then(() => {
        Swal.fire("Success!", "Berhasil Menambah Produk");
        dispatch(setStatus());
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
};
