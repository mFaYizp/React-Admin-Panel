import "./singleUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const SingleUser = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/find/" + userId);
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, [userId]);

  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders/find/"+ userId);
        setUserOrders(res.data);
      } catch {}
    };
    getOrders();
  }, [userId]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={users.img}
                alt="userProfile"
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{users.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{users.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+44 3456 78 96</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Lodge, Queen's Gate,Brompton, London
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">UK</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            {/* <Chart data={} dataKey="Orders" aspect={3 / 1} title="User Monthly Orders" /> */}
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List data={userOrders} />
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
