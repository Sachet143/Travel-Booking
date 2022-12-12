import ClientNavbar from "@/components/client/profile/Navbar";
import ClientLayout from "@/components/layout/client/ClientLayout";
import useUser from "@/services/hooks/useUser";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Dashboard from "./Dashboard";
import HotelProfile from "./HotelProfile";
import MyProfile from "./MyProfile";
import Notification from "./Notification";

const Profile = () => {
  const { user } = useUser();

  const [tab, setTab] = useState("dashboard");

  return (
    <ClientLayout>
      <section id="dashboard_main_arae" className="section_padding">
        <div className="container">
          <ClientNavbar tab={tab} setTab={setTab} />
          <div className="row">
            <div className="col-lg-12">{renderTab(tab)}</div>
          </div>
        </div>
      </section>
    </ClientLayout>
  );
};

const renderTab = (tab: any) => {
  switch (tab) {
    case "dashboard":
      return <Dashboard />;
    case "profile":
      return <HotelProfile />;
    case "booking":
      return <MyProfile />;
    default:
      return <Dashboard />;
  }
};

export default Profile;
