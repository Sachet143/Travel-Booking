import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard_main_top">
        <div className="row">
          <div className="col-lg-6">
            <div className="dashboard_top_boxed">
              <div className="dashboard_top_icon">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="dashboard_top_text">
                <h3>Total bookings</h3>
                <h1>231</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="dashboard_top_boxed">
              <div className="dashboard_top_icon">
                <i className="fas fa-sync"></i>
              </div>
              <div className="dashboard_top_text">
                <h3>Pending bookings</h3>
                <h1>23</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_common_table">
        <h3>My bookings</h3>
        <div className="table-responsive-lg table_common_area">
          <table className="table">
            <thead>
              <tr>
                <th>Sl no.</th>
                <th>Booking ID</th>
                <th>Booking type</th>
                <th>Booking amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01.</td>
                <td>#JK589V80</td>
                <td>Hotel</td>
                <td>$754.00</td>
                <td className="complete">Completed</td>
                <td>
                  <i className="fas fa-eye"></i>
                </td>
              </tr>
              <tr>
                <td>02.</td>
                <td>#JK589V80</td>
                <td>Hotel</td>
                <td>$754.00</td>
                <td className="complete">Completed</td>
                <td>
                  <i className="fas fa-eye"></i>
                </td>
              </tr>
              <tr>
                <td>03.</td>
                <td>#JK589V80</td>
                <td>Hotel</td>
                <td>$754.00</td>
                <td className="complete">Completed</td>
                <td>
                  <i className="fas fa-eye"></i>
                </td>
              </tr>
              <tr>
                <td>04.</td>
                <td>#JK589V80</td>
                <td>Hotel</td>
                <td>$754.00</td>
                <td className="complete">Completed</td>
                <td>
                  <i className="fas fa-eye"></i>
                </td>
              </tr>
              <tr>
                <td>05.</td>
                <td>#JK589V80</td>
                <td>Hotel</td>
                <td>$754.00</td>
                <td className="cancele">Canceled</td>
                <td>
                  <i className="fas fa-eye"></i>
                </td>
              </tr>
              <tr>
                <td>06.</td>
                <td>#JK589V80</td>
                <td>Hotel</td>
                <td>$754.00</td>
                <td className="complete">Completed</td>
                <td>
                  <i className="fas fa-eye"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination_area">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
