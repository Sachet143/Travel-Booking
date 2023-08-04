import { useRouter } from "next/router";
import LogoWhite from "@/public/client/assets/img/YS-White.svg";
import { Dropdown } from "antd";
import Plane from "@/public/client/assets/img/airplane.png";
import Hotel from "@/public/client/assets/img/resort.png";
import Tour from "@/public/client/assets/img/travel-and-tourism.png";

export function LargeTopbar({date, user, menu}: any) {
  const router = useRouter();
    return <div className="navbar-type2 hidden lg:block">
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
                    } }
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
                      <a
                        href="#"
                        className="nav-link"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push(
                            `/trip?date=${date}&start_destination=Kathmandu&final_destination=Pokhara&shift=Day`
                          );
                        } }
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
                        } }
                        href="_target"
                      >
                        <img src={Hotel.src} alt="logo" />
                        Stays
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="others-options d-flex align-items-center gap-5">
                <div className="option-item">
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      router.push("/become-partner");
                    } }
                    className="btn"
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
                      <div className="d-flex gap-2 align-items-center">
                        <p
                          className="text-white mb-0"
                          style={{ fontWeight: 400 }}
                        >
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
                      } }
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
    </div>;
  }
  