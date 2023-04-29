import ClientLayout from "@/components/layout/client/ClientLayout";
import React from "react";

const Ticket = () => {
  return (
    <ClientLayout>
      <div className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ticket_wrapper">
                <div className="ticket_title_wrapper text-center">
                  <h4>Cinestar Pvt. Ltd</h4>
                  <h4>City Center,Kamalpokhari, Kathmandu</h4>
                </div>
                <div className="ticket_detail_wrapper d-flex justify-content-between">
                  <div className="wrapper-left">
                    <h5>
                      Sn: <b>AQ124D8912-AQJGN</b>
                    </h5>
                    <h5>
                      Movie: <b>Kantara-2D</b>
                    </h5>
                    <h5>
                      Screen: <b>Audi-2</b>
                    </h5>
                  </div>
                  <div className="wrapper-right">
                    <h5>
                      Vat: <b>391058493</b>
                    </h5>
                    <h5>
                      Type: <b>Plainum</b>
                    </h5>
                  </div>
                </div>
                <div className="small_detail d-flex justify-content-between">
                  <h6>Date:14124</h6>
                  <h6>Time:9:30</h6>
                  <h6>Type:Platinum</h6>
                </div>
                <div className="ticket_price_wrapper flex-column d-flex align-items-end">
                  <h6>Entrance Fee: &nbsp; 258.11</h6>
                  <h6>Entrance Fee: &nbsp; 258.11</h6>
                  <h6>Entrance Fee: &nbsp; 258.11</h6>
                  <h6>Entrance Fee: &nbsp; 258.11</h6>
                  <h6>Entrance Fee: &nbsp; 258.11</h6>
                </div>
                <div className="policy_wrapper">
                  <ul>
                    <li>
                      Tickets once sold cannot be refunded,transferred or
                      exchanged.
                    </li>
                    <li>
                      Lost,stolen or damaged tickets will not be replaced.
                    </li>
                    <li>
                      Seats allocation cannot be altered after the purchase of
                      the tickets.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
};

export default Ticket;
