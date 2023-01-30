export const BusadminSidebarMenus = [
    {
        title: "Dashboard",
        link: "/busadmin",
        icon: "/admin/img/menu-icon/7.svg"
    },
    {
        title: "My Operator",
        link: "/busadmin/bus-operator/update",
        icon: "/admin/img/menu-icon/7.svg"
    },
    {
        title: "Bus",
        parent: true,
        icon: "/admin/img/menu-icon/7.svg",
        children: [
            {
                title: "Create",
                link: "/busadmin/bus/create"
            },
            {
                title: "Listing",
                link: "/busadmin/bus"
            },
        ]
    },
    {
        title: "Bookings",
        parent: true,
        icon: "/admin/img/menu-icon/7.svg",
        children: [
            {
                title: "Current Bookings",
                link: "/busadmin/booking/current"
            },
            {
                title: "History",
                link: "/busadmin/booking/history"
            },
        ]
    },
    {
        title: "Gallery",
        link: "/busadmin/gallery",
        icon: "/admin/img/menu-icon/7.svg"
    },
]