import LogoPurple from "@/public/client/assets/img/YS-purple.svg";
import Plane from "@/public/client/assets/img/airplane.png";
import Hotel from "@/public/client/assets/img/resort.png";
import Tour from "@/public/client/assets/img/travel-and-tourism.png";
import { TOKEN_KEY, USER_TYPE_KEY } from "@/services/constants";
import { appDecrypt, avatarGenerator } from "@/services/helper";
import useUser from "@/services/hooks/useUser";
import { Dropdown, Menu, Space } from "antd";
import { deleteCookie, getCookie } from "cookies-next";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LargeTopbar } from "./LargeTopbar";
import { MediumTopbar } from "./MediumTopbar";
import SearchBar from "./SearchBar";
import clsx from "clsx";

const TopBar = () => {
  const router = useRouter();
  const [path, setPath] = useState<any>();
  const [offset, setOffset] = useState<any>();
  const { user } = useUser();

  const userType = getCookie(USER_TYPE_KEY);
  // user types
  const isSuperAdmin = userType && appDecrypt(userType + "") === "superadmin";
  const isHotelAdmin = userType && appDecrypt(userType + "") === "hoteladmin";
  const isBusAdmin = userType && appDecrypt(userType + "") === "busadmin";

  let date = moment(Date.now()).format("YYYY-MM-DD");

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (isSuperAdmin) {
                  router.push("/superadmin");
                } else if (isHotelAdmin) {
                  router.push("/hoteladmin");
                } else if (isBusAdmin) {
                  router.push("/busadmin");
                } else {
                  router.push("/profile");
                }
              }}
            >
              My Acc.
            </a>
          ),
        },
        {
          key: "2",
          label: (
            <a target="_blank" rel="noopener noreferrer">
              Customer Support
            </a>
          ),
        },
        {
          key: "3",
          label: (
            <a target="_blank" rel="noopener noreferrer">
              Feedback
            </a>
          ),
        },
        {
          key: "4",
          label: (
            <a
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                router.push("/become-partner");
              }}
            >
              Become a partner
            </a>
          ),
        },
        {
          key: "5",
          danger: true,
          label: "Logout",
          onClick: () => {
            let wasRole;
            if (isSuperAdmin) {
              wasRole = "superadmin";
            } else if (isHotelAdmin) {
              wasRole = "hoteladmin";
            } else if (isBusAdmin) {
              wasRole = "busadmin";
            } else {
              wasRole = "customer";
            }

            deleteCookie(USER_TYPE_KEY);
            deleteCookie(TOKEN_KEY);

            if (wasRole === "superadmin") {
              window.location.href = "/superadmin/login";
            } else if (wasRole === "hoteladmin") {
              window.location.href = "/hoteladmin/login";
            } else if (wasRole === "busadmin") {
              window.location.href = "/busadmin/login";
            } else {
              window.location.href = "/login";
            }
          },
        },
      ]}
    />
  );

  useEffect(() => {
    // show two navbars only on large screens
    if (window.innerWidth > 1024) {
      setPath(router.pathname);
      const onScroll = (e: any) => {
        setOffset(window.pageYOffset);
      };
      window.removeEventListener("scroll", onScroll);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchBar path={path} />

      <header className="main_header_arae">
        {/* Top Bar */}
        <LargeTopbar date={date} user={user} menu={menu} />
        <MediumTopbar date={date} user={user} menu={menu} />

        {/* on scroll navbar only for large screens */}
        <div
          className={clsx(
            "navbar-type2 navbar-area",
            router.pathname !== "/client"
              ? // always visible when not in home
                // "lg:fixed lg:top-0 lg:left-0 lg:w-full lg:z-99 !lg:bg-white"
                "is-sticky lg:fixed"
              : // when in home
              offset > 100
              ? "is-sticky lg:fixed"
              : ""
          )}
          // className={`navbar-type2 navbar-area ${
          //   router.pathname != "/client"
          //     ? "hidden lg:block is-sticky"
          //     : offset > 100
          //     ? "hidden lg:block is-sticky"
          //     : ""
          // }`}
        >
          <div className="container hidden lg:block">
            <div className="row">
              <div className="col-md-12">
                <div className="nav-wrapper">
                  <div className="logo-wrapper">
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
                    <div className="others-options d-flex align-items-center small-screen-option">
                      <div className="option-item">
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            router.push("/become-partner");
                          }}
                          className="btn "
                        >
                          Become a partner
                        </a>
                      </div>
                      {user?.id ? (
                        <div>
                          <Dropdown
                            className="custom_drop"
                            overlay={menu}
                            trigger={["click"]}
                          >
                            <a onClick={(e) => e.preventDefault()}>
                              <Space>
                                <img
                                  alt="image"
                                  src={avatarGenerator(user.email)}
                                  className="user_image bg-white border"
                                />
                              </Space>
                            </a>
                          </Dropdown>
                        </div>
                      ) : (
                        <div className="option-item">
                          <a
                            href="_target"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/login");
                            }}
                            className="btn "
                          >
                            Login
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-nav-wrapper">
                    <div
                      className=" navbar-collapse mean-menu"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            <img src={Plane.src} alt="logo" />
                            Flights
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#"
                            className="nav-link"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push(
                                `/trip?date=${date}&start_destination=Kathmandu&final_destination=Pokhara&shift=Day`
                              );
                            }}
                          >
                            <img src={Tour.src} alt="logo" />
                            Buses
                          </a>
                        </li>

                        <li className="nav-item">
                          <a
                            className="nav-link"
                            onClick={(e) => {
                              e.preventDefault();
                              router.push("/hotels");
                            }}
                            href="_target"
                          >
                            <img src={Hotel.src} alt="logo" />
                            Stays
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="others-options d-flex align-items-center big-screen-option gap-5">
                    <div className="option-item">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/become-partner");
                        }}
                        className="btn btn_theme btn_sm"
                      >
                        Become a partner
                      </button>
                    </div>
                    {user?.id ? (
                      <div>
                        <Dropdown
                          className="custom_drop"
                          overlay={menu}
                          trigger={["click"]}
                        >
                          <div className="d-flex gap-2 align-items-center">
                            <p className=" mb-0" style={{ fontWeight: 400 }}>
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
                      <div className="option-item">
                        <a
                          href="_target"
                          onClick={(e) => {
                            e.preventDefault();
                            router.push("/login");
                          }}
                          className="btn "
                        >
                          Login
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
