import React from "react";
import { Link } from "react-router-dom";
let users = [
  {
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: 61,
    Startdate: "2011/04/25",
    Salary: 320800,
  },
  {
    Name: "Garrett Winters",
    Position: "Accountant",
    Office: "Tokyo",
    Age: 63,
    Startdate: "2011/07/25",
    Salary: 170750,
  },
  {
    Name: "Ashton Cox",
    Position: "Junior Technical Author",
    Office: "San Francisco",
    Age: 60,
    Startdate: "2009/01/12",
    Salary: 86800,
  },
  {
    Name: "Cedric Kelly",
    Position: "Senior Javascript Developer",
    Office: "Edinburgh",
    Age: 22,
    Startdate: "2012/03/29",
    Salary: 320800,
  },
  {
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: 61,
    Startdate: "2011 / 04 / 25",
    Salary: 320800,
  },
  {
    Name: "Garrett Winters",
    Position: "Accountant",
    Office: "Tokyo",
    Age: 63,
    Startdate: "2011/07/25",
    Salary: 170750,
  },
  {
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: 61,
    Startdate: "2012/03/29",
    Salary: 320800,
  },
  {
    Name: "Ashton Cox",
    Position: "Junior Technical Author",
    Office: "San Francisco",
    Age: 60,
    Startdate: "2009/01/12",
    Salary: 86800,
  },
  {
    Name: "Garrett Winters",
    Position: "Accountant",
    Office: "Tokyo",
    Age: 63,
    Startdate: "2011/07/25",
    Salary: 170750,
  },
  {
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: 61,
    Startdate: "2012/03/29",
    Salary: 320800,
  },
];

function Users() {
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">User Information</h1>
        <Link
          to={"/users/create-user"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create New
          User
        </Link>
      </div>
      <p className="mb-4">
        DataTables is a third party plugin that is used to generate the demo
        table below. For more information about DataTables.
      </p>
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">
          DataTables Example
        </h6>
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
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.Name}</td>
                    <td>{user.Position}</td>
                    <td>{user.Office}</td>
                    <td>{user.Age}</td>
                    <td>{user.Startdate}</td>
                    <td>{user.Salary}</td>
                    <td>
                      {" "}
                    <Link to={"/users/view-user"}>  <button className="btn btn-primary mx-2"> View</button></Link>
                     <Link to={"/users/edit-user"}> <button className="btn btn-warning me-2"> Edit</button></Link>
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

export default Users;
