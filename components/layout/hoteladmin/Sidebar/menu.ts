export const HoteladminSidebarMenus = [
    {
        title: "Dashboard",
        link: "/hoteladmin",
        icon: "/admin/img/menu-icon/7.svg"
    },
    {
        title: "Hotel",
        parent: true,
        icon: "/admin/img/menu-icon/7.svg",
        children: [
            {
                title: "Create",
                link: "/hoteladmin/hoteladmin/create"
            },
            {
                title: "Listing",
                link: "/hoteladmin/hoteladmin"
            },
        ]
    },
    {
        title: "Hotel Management",
        parent: true,
        icon: "/admin/img/menu-icon/7.svg",
        children: [
            {
                title: "Create Admin",
                link: "/hoteladmin/hotels/create"
            },
            {
                title: "Listing",
                link: "/hoteladmin/hotels"
            },
        ]
    },
]