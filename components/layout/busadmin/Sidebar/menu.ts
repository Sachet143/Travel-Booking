export const BusadminSidebarMenus = [
    {
        title: "Dashboard",
        link: "/busadmin",
        icon: "/admin/img/menu-icon/7.svg"
    },
    {
        title: "My Bus",
        link: "/busadmin/bus/update",
        icon: "/admin/img/menu-icon/7.svg"
    },
    {
        title: "Bus Room",
        parent: true,
        icon: "/admin/img/menu-icon/7.svg",
        children: [
            {
                title: "Create",
                link: "/busadmin/room/create"
            },
            {
                title: "Listing",
                link: "/busadmin/room"
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