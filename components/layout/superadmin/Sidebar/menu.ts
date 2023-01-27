export const SuperadminSidebarMenus = [
  {
    title: "Dashboard",
    link: "/superadmin",
    icon: "/admin/img/menu-icon/7.svg",
  },
  {
    title: "Superadmins",
    parent: true,
    icon: "/admin/img/menu-icon/7.svg",
    children: [
      {
        title: "Create",
        link: "/superadmin/superadmin/create",
      },
      {
        title: "Listing",
        link: "/superadmin/superadmin",
      },
    ],
  },
  {
    title: "Hotel Management",
    parent: true,
    icon: "/admin/img/menu-icon/7.svg",
    children: [
      {
        title: "Pending Approvals",
        link: "/superadmin/hotels/approval",
      },
      {
        title: "Create Hotel",
        link: "/superadmin/hotels/create",
      },
      {
        title: "Listing",
        link: "/superadmin/hotels",
      },
    ],
  },
  {
    title: "Bus Management",
    parent: true,
    icon: "/admin/img/menu-icon/7.svg",
    children: [
      {
        title: "Create Bus",
        link: "/superadmin/bus/create",
      },
      {
        title: "Listing",
        link: "/superadmin/bus",
      },
      {
        title: "Category Listing",
        link: "/superadmin/bus/category/list",
      },
      {
        title: "Create Category",
        link: "/superadmin/bus/category/create",
      },
    ],
  },
  {
    title: "Miscs",
    parent: true,
    icon: "/admin/img/menu-icon/7.svg",
    children: [
      {
        title: "Activities",
        link: "/superadmin/miscs/activities",
      },
      {
        title: "Hotel Facilities",
        link: "/superadmin/miscs/facilities",
      },
      {
        title: "Room Facilities",
        link: "/superadmin/miscs/room-facilities",
      },
    ],
  },
];
