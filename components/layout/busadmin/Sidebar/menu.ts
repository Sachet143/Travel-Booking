export const BusadminSidebarMenus = [
  {
    title: "Dashboard",
    link: "/busadmin",
    icon: "/admin/img/menu-icon/dashboard.svg",
  },
  {
    title: "My Operator",
    link: "/busadmin/bus-operator/update",
    icon: "/admin/img/menu-icon/operator.svg",
  },
  {
    title: "Bus",
    parent: true,
    icon: "/admin/img/menu-icon/bus.svg",
    children: [
      {
        title: "Create",
        link: "/busadmin/bus/create",
      },
      {
        title: "Listing",
        link: "/busadmin/bus",
      },
    ],
  },
  {
    title: "Routes",
    parent: true,
    icon: "/admin/img/menu-icon/route.svg",
    children: [
      {
        title: "Create",
        link: "/busadmin/bus-routes/create",
      },
      {
        title: "Listing",
        link: "/busadmin/bus-routes",
      },
    ],
  },
  {
    title: "Trip",
    parent: true,
    icon: "/admin/img/menu-icon/trip.svg",
    children: [
      {
        title: "Create",
        link: "/busadmin/trip/create",
      },
      {
        title: "Listing",
        link: "/busadmin/trip",
      },
    ],
  },
  {
    title: "Bookings",
    parent: true,
    icon: "/admin/img/menu-icon/booking.png",
    children: [
      {
        title: "Current Bookings",
        link: "/busadmin/booking/current",
      },
      {
        title: "History",
        link: "/busadmin/booking/history",
      },
    ],
  },
  {
    title: "Gallery",
    link: "/busadmin/gallery",
    icon: "/admin/img/menu-icon/gallery.svg",
  },
];
