import { useSelector } from "react-redux";

function ProductTable() {
  const { listProduct } = useSelector((state) => {
    return {
      listProduct: state.listProduct,
    };
  });

  return (
    <div>
      {listProduct && listProduct.length > 0 ? (
        <table className="container">
          <thead>
            <tr>
              <th>Nama Produk</th>
              <th>Satuan</th>
              <th>Harga Satuan</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {listProduct.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.nama}</td>
                  <td>{e.satuan}</td>
                  <td>{e.hargaSatuan}</td>
                  <td>{e.deskripsi}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h4> Produk yang anda Cari Belum Tersedia :( </h4>
      )}
    </div>
  );
}

export default ProductTable;
