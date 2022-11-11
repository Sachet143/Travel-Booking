import ClientLayout from "@/components/layout/client/ClientLayout";
import useUser from "@/services/hooks/useUser";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Dashboard from "./Dashboard";
import HotelProfile from "./HotelProfile";
import MyProfile from "./MyProfile";
import Notification from "./Notification";

const Profile = () => {
  const { getValues, register, control, handleSubmit, formState, reset } =
    useForm({});

  const { user } = useUser();

  const [tab, setTab] = useState("1");
  return (
    <ClientLayout>
      <section id="dashboard_main_arae" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="dashboard_sidebar">
                <div className="dashboard_sidebar_user">
                  <img src="https://i.pravatar.cc/400" className="user_image" />
                  <h3 className="text-capitalize">{user?.name}</h3>
                  <p>
                    <a href={`tel:${user?.phone}`}>
                      {user?.phone || "No Phone Number Available"}
                    </a>
                  </p>
                  <p>
                    <a href={`mailto:${user?.email}`}>{user?.email}</a>
                  </p>
                </div>
                <div className="dashboard_menu_area">
                  <ul>
                    <li>
                      <a
                        href="_target"
                        onClick={(e: any) => {
                          e.preventDefault();
                          setTab("1");
                        }}
                        className={tab == "1" ? "active" : ""}
                      >
                        <i className="fas fa-tachometer-alt"></i>Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="_target"
                        onClick={(e: any) => {
                          e.preventDefault();
                          setTab("2");
                        }}
                        className={tab == "2" ? "active" : ""}
                      >
                        <i className="fas fa-tachometer-alt"></i>Hotel Booking
                      </a>
                    </li>
                    <li>
                      <a
                        href="_target"
                        onClick={(e: any) => {
                          e.preventDefault();
                          setTab("3");
                        }}
                        className={tab == "3" ? "active" : ""}
                      >
                        <i className="fas fa-user-circle"></i>My profile
                      </a>
                    </li>

                    <li>
                      <a
                        href="_target"
                        onClick={(e: any) => {
                          e.preventDefault();
                          setTab("4");
                        }}
                        className={tab == "4" ? "active" : ""}
                      >
                        <i className="fas fa-bell"></i>Notifications
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <i className="fas fa-sign-out-alt"></i>Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">{renderTab(tab)}</div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
};

const renderTab = (tab: any) => {
  switch (tab) {
    case "1":
      return <Dashboard />;
    case "2":
      return <HotelProfile />;
    case "3":
      return <MyProfile />;
    case "4":
      return <Notification />;
    default:
      return <Dashboard />;
  }
};

export default Profile;
