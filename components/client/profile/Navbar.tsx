import useUser from "@/services/hooks/useUser";
import { AppstoreOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { MenuProps } from "rc-menu";

function ClientNavbar({ tab, setTab }: any) {
  const onClick: MenuProps["onClick"] = (e) => {
    setTab(e.key);
  };

  const { user } = useUser();

  const items: MenuProps["items"] = [
    {
      label: user?.name,
      key: "profile",
      // @ts-ignore
      icon: <i className="fas fa-user-circle primary_color" />,
    },

    {
      label: "Dashboard",
      key: "dashboard",
      // @ts-ignore
      // icon: <i className="fas fa-tachometer-alt" />,
    },

    {
      label: "My Bookings",
      key: "booking",
      // @ts-ignore
      // icon: <AppstoreOutlined />,
    },
    {
      label: "Bus Booking",
      key: "busProfile",
    },
    {
      label: "Rewards",
      key: "rewards",
    },
    {
      label: "Coupons & credits",
      key: "coupons",
    },
    {
      label: "Privacy & security",
      key: "privacy",
    },
  ];

  return (
    <>
      <Menu
        color="#4A5EF5"
        className="mb-4 custom_profile_menu"
        onClick={onClick}
        selectedKeys={[tab]}
        mode="horizontal"
        items={items}
      />
    </>
  );
}

export default ClientNavbar;
