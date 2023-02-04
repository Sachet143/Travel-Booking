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
        title: "Routes",
        parent: true,
        icon: "/admin/img/menu-icon/7.svg",
        children: [
            {
                title: "Create",
                link: "/busadmin/bus-routes/create"
            },
            {
                title: "Listing",
                link: "/busadmin/bus-routes"
            },
        ]
    },
    {
        title: "Trip",
        parent: true,
        icon: "/admin/img/menu-icon/7.svg",
        children: [
            {
                title: "Create",
                link: "/busadmin/trip/create"
            },
            {
                title: "Listing",
                link: "/busadmin/trip"
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