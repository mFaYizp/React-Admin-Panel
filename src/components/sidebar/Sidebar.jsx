import {
  AccountCircle,
  CreditCard,
  Dashboard,
  LocalShipping,
  Logout,
  NotificationsNoneOutlined,
  PersonOutlineOutlined,
  Poll,
  PsychologyOutlined,
  Settings,
  SettingsSystemDaydreamOutlined,
  Store,
} from "@mui/icons-material";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">faz.admin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
        <Link to="/users" style={{ textDecoration: "none" }}>
          <li>
            <PersonOutlineOutlined className="icon" />
            <span>Users</span>
          </li>
          </Link>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <li>
            <Store className="icon" />
            <span>Products</span>
          </li>
          </Link>
          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <Poll className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlined className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircle className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
