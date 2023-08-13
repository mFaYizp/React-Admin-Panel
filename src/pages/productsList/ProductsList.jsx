import "./productsList.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect } from "react";
import { productColumns } from "../../datatableSource";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../Redux/apiCalls";

const List = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={"/products/test" + params.row._id}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="datatable">
          <div className="datatableTitle">
            Add New Product
            <Link to="/products/new" className="link">
              Add New
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={products}
            columns={productColumns.concat(actionColumn)}
            getRowId={(row) => row._id}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};

export default List;
