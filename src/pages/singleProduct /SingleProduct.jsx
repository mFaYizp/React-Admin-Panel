import "./singleProduct.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const SingleProduct = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Product</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt="userProfile"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Mac book</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">suladev@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sales:</span>
                  <span className="itemValue">+44 3456 78 96</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Active:</span>
                  <span className="itemValue">
                    Lodge, Queen's Gate,
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">In Stock:</span>
                  <span className="itemValue">UK</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending (Last 6 Month)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
