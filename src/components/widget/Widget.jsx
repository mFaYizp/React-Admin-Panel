import {
  AccountBalanceWalletOutlined,
  AttachMoneyOutlined,
  Checklist,
  KeyboardArrowUp,
  MonetizationOnOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
  VerifiedOutlined,
} from "@mui/icons-material";
import "./widget.scss";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const Widget = () => {
  const [users, setUsers] = useState([]);
  const [incomes, setIncome] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest("users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
      } catch (err) {console.log(err);}
    };
    getIncome();
  }, []);
  const sum = incomes.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.total;
  }, 0);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch (err) {console.log(err);}
    };
    getOrders()
  },[]);
console.log(orders.length);
  return (
    <div className="widgets">
      <div className="widgetItem">
        <div className="left">
          <span className="title">USERS</span>
          <span className="counter">{users.length}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <VerifiedOutlined />
          </div>
          <PersonOutlineOutlined
            className="icon"
            style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
          />
        </div>
      </div>
      <div className="widgetItem">
        <div className="left">
          <span className="title">ORDERS</span>
          <span className="counter">{orders.length}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <Checklist />
          </div>
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        </div>
      </div>
      <div className="widgetItem">
        <div className="left">
          <span className="title">EARNINGS</span>
          <span className="counter">{sum} $</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <AttachMoneyOutlined />
          </div>
          <MonetizationOnOutlined
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Widget;
