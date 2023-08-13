import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/userList/UserList";
import ProductsList from "./pages/productsList/ProductsList";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import SingleUser from "./pages/singleUser/SingleUser";
import SingleProduct from "./pages/singleProduct /SingleProduct";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {admin && (
              <>
                <Route path="users">
                  <Route index element={<UserList />} />
                  <Route path=":userId" element={<SingleUser />} />
                  <Route
                    path="new"
                    element={<New inputs={userInputs} title="Add New User" />}
                  />
                </Route>
                <Route path="products">
                  <Route index element={<ProductsList />} />
                  <Route path=":productId" element={<SingleProduct />} />
                  <Route
                    path="new"
                    element={
                      <New inputs={productInputs} title="Add New Product" />
                    }
                  />
                </Route>
              </>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
