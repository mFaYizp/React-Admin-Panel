import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  MoreVert,
} from "@mui/icons-material";
import "./featured.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const Featured = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
  console.log(income[1]);
  console.log(percentage);
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue(month)</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar
            value={Math.floor(percentage)}
            text={Math.floor(percentage) + "%"}
            strokeWidth={5}
          />
        </div>
        <p className="title">Total sales made this month</p>
        <p className="amount">${income.total}</p>
        <p className="desc">
          Previous transaction processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlined fontSize="small" />
              <div className="resultAmount">$15.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$15.5k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlined fontSize="small" />
              <div className="resultAmount">$15.5k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Featured;
