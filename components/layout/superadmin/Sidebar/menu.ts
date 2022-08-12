export const SuperadminSidebarMenus = [
    {
        title: "Dashboard",
        link: "/superadmin",
        icon: "/admin/img/menu-icon/7.svg"
    },
    {
        title: "Hotel Management",
        parent: true,
        icon: "/admin/img/menu-icon/7.svg",
        children: [
            {
                title: "Create",
                link: "/superadmin/hotels/create"
            },
            {
                title: "Listing",
                link: "/superadmin/hotels"
            },
        ]
    },
]