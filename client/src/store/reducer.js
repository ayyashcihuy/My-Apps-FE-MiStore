import actionType from "./actionType";

const alamipedia = {
  Nama: "",
  listToko: [],
  listProduct: [],
  status: false,
};

function reducer(state = alamipedia, action) {
  switch (action.type) {
    case actionType.FETCH_DATA:
      return {
        ...state,
        listToko: action.payload,
      };
    case actionType.SET_STATUS:
      return {
        ...state,
        status: !state.status,
      };
    case actionType.SET_PRODUCT:
      return {
        ...state,
        listProduct: action.payload,
      };
    case actionType.RESET_DATA:
      return {
        ...state,
        listProduct: [],
      };
    default:
      return state;
  }
}

export default reducer;
