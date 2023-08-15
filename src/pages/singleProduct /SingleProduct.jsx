import "./singleProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Publish } from "@mui/icons-material";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

const SingleProduct = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="productTitleContainer">
          <h1 className="productTitle">Product</h1>
          <Link to="/products/new">
            <button className="productAddButton">Add New</button>
          </Link>
        </div>
        <div className="top">
          <div className="left">
            <div className="item">
              <img src={product.img} alt="userProfile" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{product.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{product._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sales:</span>
                  <span className="itemValue">3456</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">In Stock:</span>
                  <span className="itemValue">{product.inStock}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              data={pStats}
              dataKey="Sales"
              aspect={3 / 1}
              title="Sales Performance"
            />
          </div>
        </div>
        <div className="bottom">
          <form className="productForm">
            <div className="productFormLeft">
              <label>Product Name</label>
              <input type="text" placeholder={product.title} />
              <label>Product Description</label>
              <input type="text" placeholder={product.desc} />
              <label>Price</label>
              <input type="text" placeholder={product.price} />
              <label>In Stock</label>
              <select name="inStock" id="idStock">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={product.img} alt="" className="productUploadImg" />
                <label htmlFor="file">
                  <Publish />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
