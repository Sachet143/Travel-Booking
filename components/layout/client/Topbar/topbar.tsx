import React, { useEffect, useState } from "react";
import LogoWhite from "@/public/client/assets/img/YS-White.svg";
import LogoPurple from "@/public/client/assets/img/YS-purple.svg";
import Plane from "@/public/client/assets/img/airplane.png";
import Tour from "@/public/client/assets/img/travel-and-tourism.png";
import Hotel from "@/public/client/assets/img/resort.png";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import SearchBar from "./SearchBar";
import useUser from "@/services/hooks/useUser";
import UserImage from "@/public/client/assets/img/user.png";
import { Dropdown, Menu, MenuProps, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";

const menu = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            Profile
          </a>
        ),
      },
      {
        key: "2",
        danger: true,
        label: "Logout",
      },
    ]}
  />
);

const TopBar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [path, setPath] = useState<any>();
  const [sticky, setSticky] = useState<any>(null);
  const [offset, setOffset] = useState<any>();
  const { user } = useUser();

  useEffect(() => {
    setPath(router.pathname);
    const onScroll = (e: any) => {
      setOffset(window.pageYOffset);
    };
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SearchBar path={path} />

      <header className="main_header_arae">
        {/* Top Bar */}

        {/* navbar type2 */}
        <div className="navbar-type2">
          <div className="container">
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
                        <img src={LogoWhite.src} alt="logo" />
                      </a>
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
                          <a href="#" className="nav-link">
                            <img src={Tour.src} alt="logo" />
                            Tours
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
                            Hotel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn">
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
                                src="https://i.pravatar.cc/400"
                                className="user_image"
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
              </div>
            </div>
          </div>
        </div>

        {/* {navbar type3} */}
        <div
          className={`navbar-type2 navbar-area ${
            router.pathname != "/client"
              ? "is-sticky"
              : offset > 100
              ? "is-sticky"
              : ""
          }`}
        >
          <div className="container">
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
                          <a href="#" className="nav-link">
                            <img src={Tour.src} alt="logo" />
                            Tours
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
                            Hotel
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn ">
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
                                src="https://i.pravatar.cc/400"
                                className="user_image"
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
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default TopBar;
