import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";

const List = ({data}) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((order, index) => (
            <TableRow key={index}>
              <TableCell className="tableCell">{order._id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={order.img} alt="productImg" className="image" />
                  {order.products.productId}
                </div>
              </TableCell>
              <TableCell className="tableCell">{order.userId}</TableCell>
              <TableCell className="tableCell">
                {format(order.createdAt)}
              </TableCell>
              <TableCell className="tableCell">{order.amount}</TableCell>
              <TableCell className="tableCell">Card Payment</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${order.status}`}>{order.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
