// @ts-nocheck
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { BusadminSidebarMenus } from './menu';

function BusadminSidebar() {
  const router = useRouter();

  const isActive = (link: string | undefined) => router.pathname === link;

  useEffect(() => {
    $("#sidebar_menu").metisMenu();
    $("#admin_profile_active").metisMenu();

    $("#sidebar_menu").find("a").removeClass("active");
    $("#sidebar_menu").find("li").removeClass("mm-active");
    $("#sidebar_menu").find("li ul").removeClass("mm-show");
    var current = window.location.pathname;

    $("#sidebar_menu >li a").filter(function () {
      var link = $(this).attr("href");
      if (link) {
        if (current.indexOf(link) != -1) {
          $(this)
            .parents()
            .parents()
            .children("ul.mm-collapse")
            .addClass("mm-show")
            .closest("li")
            .addClass("mm-active");
          // $(this).addClass("active");
          return false;
        }
      }
    });
  }, []);

  return (
    <nav className="sidebar">
      <div className="logo d-flex justify-content-between">
        <Link href="/busadmin" className="cursor-pointer">
          <img className="cursor-pointer" src="/client/assets/img/YS-purple.svg" alt="" />
        </Link>
        {/* <Link href="/busadmin" className="cursor-pointer">
                    <img className="cursor-pointer" src="/client/assets/img/YS-purple.svg" alt="" />
                </Link> */}
        <div className="sidebar_close_icon d-lg-none">
          <i className="ti-close" />
        </div>
      </div>
      <ul id="sidebar_menu">
        {BusadminSidebarMenus.map(menu => {
          if (menu.parent) {
            return (
              <li key={menu.title}>
                <a className="has-arrow" href="#" aria-expanded="false">
                  <div className="nav_icon_small">
                    <img src={menu.icon} alt={menu.title} />
                  </div>
                  <div className="nav_title">
                    <span>{menu.title}</span>
                  </div>
                </a>
                <ul>
                  {
                    menu.children.map(cmenu => {
                      return (
                        <Link key={cmenu.title} href={cmenu.link}>
                          <a className={isActive(cmenu.link) ? "cactive" : ""}>{cmenu.title}</a>
                        </Link>
                      )
                    }
                    )
                  }
                </ul>
              </li>
            )
          } else {
            return (
              <li key={menu.title}>
                <a onClick={() => Router.push(menu.link)} aria-expanded="false">
                  <div className="nav_icon_small">
                    <i className={menu.icon} alt={menu.title}></i>
                  </div>
                  <div className="nav_title">
                    <span>{menu.title}</span>
                  </div>
                </a>
              </li>
            )
          }
        })}
      </ul>
    </nav>
  )
}

export default BusadminSidebar