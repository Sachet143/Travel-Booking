import LogoPurple from "@/public/client/assets/img/YS-purple.svg";
import { Dropdown } from "antd";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";

export function MediumTopbar({ date, user, menu }: any) {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);

  function isPath(path: string) {
    return router.pathname.includes(path);
  }

  return (
    <nav className="border-gray-200 dark:bg-gray-900 lg:hidden fixed w-100">
      <div className="bg-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="logo">
          <a
            onClick={(e) => {
              e.preventDefault();
              router.push("/");
            }}
            href="_target"
          >
            <img src={LogoPurple.src} alt="logo" />
          </a>
        </div>
        {renderHamburger()}
        <div
          className={clsx(openNav ? "block" : "hidden", "w-full lg:w-auto")}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-primary rounded-lg lg:flex-row lg:space-x-8">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 bg-blue-700 rounded"
                aria-current="page"
              >
                Flights
              </a>
            </li>
            <li>
              <a
                href="#"
                className={clsx(
                  isPath("/trip") ? "bg-primary text-white" : "",
                  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    `/trip?date=${date}&start_destination=Kathmandu&final_destination=Pokhara&shift=Day`
                  );
                }}
              >
                Buses
              </a>
            </li>
            <li>
              <a
                href="#"
                className={clsx(
                  isPath("/hotels") ? "bg-primary text-white" : "",
                  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/hotels");
                }}
              >
                Stays
              </a>
            </li>
            <li>
              <a
                href="#"
                className={clsx(
                  isPath("/become-partner") ? "bg-primary text-white" : "",
                  "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/become-partner");
                }}
              >
                Become a partner
              </a>
            </li>
            {user?.id ? (
              <div>
                <Dropdown
                  className="custom_drop"
                  overlay={menu}
                  trigger={["click"]}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <p className="text-white mb-0" style={{ fontWeight: 400 }}>
                      <b>Hi, {user?.name.split(" ")[0]}</b>
                    </p>
                    {/* <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img
                  alt="pro-pic"
                  src={avatarGenerator(user.email)}
                  className="user_image bg-white border"
                />
              </Space>
            </a> */}
                  </div>
                </Dropdown>
              </div>
            ) : (
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );

  function renderHamburger() {
    return (
      <button
        onClick={() => setOpenNav(!openNav)}
        data-collapse-toggle="navbar-default"
        type="button"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    );
  }
}
