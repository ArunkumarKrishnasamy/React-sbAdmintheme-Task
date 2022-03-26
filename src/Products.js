import React from "react";
import { Link } from "react-router-dom";
let products = [
  {
    ProductName: "iPhone 11",
    Brand: "Apple",
    Price: "$100000",
    Address: "Chennai",
  },
  {
    ProductName: "Galaxy S7",
    Brand: "Samsung",
    Price: "$25000",
    Address: "Bangalore",
  },
  {
    ProductName: "Experia max",
    Brand: "Sony",
    Price: "$350000",
    Address: "Delhi",
  },
  { ProductName: "V20 Pro", Brand: "Vivo", Price: "$40000", Address: "Mumbai" },
  {
    ProductName: "F17 Reno",
    Brand: "Oppo",
    Price: "$550000",
    Address: "Kolkata",
  },
];
function Products() {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Product Details</h1>
        <Link
         to={"/products/create-product"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create New
          Product
        </Link>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr>
                    <td>{product.ProductName}</td>
                    <td>{product.Brand}</td>
                    <td>{product.Price}</td>
                    <td>{product.Address}</td>
                    <td>
                      {" "}
                      <Link to={"/products/view-product"}>
                        {" "}
                        <button className="btn btn-primary mx-2"> View</button>
                      </Link>
                      <Link to={"/products/edit-product"}>
                        {" "}
                        <button className="btn btn-warning me-2"> Edit</button>
                      </Link>
                      <button className="btn btn-danger me-2"> Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
