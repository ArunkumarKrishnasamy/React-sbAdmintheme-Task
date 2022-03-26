import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import Chart from "./Chart";
import CreateUser from "./CreateUser";
import CreateProduct from "./CreateProduct";
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="" element={<Chart />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users/create-user" element={<CreateUser />} />
                <Route
                  path="/products/create-product"
                  element={<CreateProduct />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
