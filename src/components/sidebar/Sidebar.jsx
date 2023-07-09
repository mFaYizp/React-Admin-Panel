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

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">faz.admin</span>
      </div>
      <hr />
      <p className="title">MAIN</p>
      <div className="center">
        <ul>
          <li>
            <Dashboard />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlined className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <Store className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <CreditCard className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <Poll className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlined className="icon"/>
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlined className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlined className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircle className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <Logout className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color option</div>
    </div>
  );
};

export default Sidebar;
