import useUser from '@/services/hooks/useUser'
import React from 'react'
import { deleteCookie } from 'cookies-next';
import { TOKEN_KEY, USER_TYPE_KEY } from '@/services/constants';
import { avatarGenerator } from '@/services/helper';

function SuperadminTopbar() {

    const { user } = useUser();

    function logoutHandler() {
        deleteCookie(USER_TYPE_KEY);
        deleteCookie(TOKEN_KEY);
        window.location.href = "/superadmin/login"
    }

    return (
        <div className="container-fluid g-0">
            <div className="row">
                <div className="col-lg-12 p-0 ">
                    <div className="header_iner d-flex justify-content-between align-items-center">
                        <div className="sidebar_icon d-lg-none">
                            <i className="ti-menu" />
                        </div>
                        <div className="line_icon open_miniSide d-none d-lg-block cursor-pointer" onClick={() => {
                            const sidebar = document.getElementsByClassName('sidebar');
                            const main = document.getElementsByClassName('main_content');
                            if (!sidebar.length) return
                            // sidebar
                            if (sidebar[0].classList.contains("mini_sidebar")) {
                                sidebar[0].classList.remove("mini_sidebar")
                            } else {
                                sidebar[0].classList.add("mini_sidebar")
                            }
                            // content
                            if (main[0].classList.contains("full_main_content")) {
                                main[0].classList.remove("full_main_content")
                            } else {
                                main[0].classList.add("full_main_content")
                            }

                        }}>
                            <img src="/admin/img/line_img.png" alt="" />
                        </div>
                        <div className="serach_field-area d-flex align-items-center">
                        </div>
                        <div className="header_right d-flex justify-content-between align-items-center">
                            {/* <div className="header_notification_warp d-flex align-items-center">
                                <li>
                                    <a className="bell_notification_clicker" href="#"> <img src="/admin/img/icon/bell.svg" alt="" />
                                        <span>2</span>
                                    </a>
                                    <div className="Menu_NOtification_Wrap">
                                        <div className="notification_Header">
                                            <h4>Notifications</h4>
                                        </div>
                                        <div className="Notification_body">
                                            <div className="single_notify d-flex align-items-center">
                                                <div className="notify_thumb">
                                                    <a href="#"><img src="/admin/img/staf/2.png" alt="" /></a>
                                                </div>
                                                <div className="notify_content">
                                                    <a href="#">
                                                        <h5>Cool Marketing </h5>
                                                    </a>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </div>
                                            <div className="single_notify d-flex align-items-center">
                                                <div className="notify_thumb">
                                                    <a href="#"><img src="/admin/img/staf/4.png" alt="" /></a>
                                                </div>
                                                <div className="notify_content">
                                                    <a href="#">
                                                        <h5>Awesome packages</h5>
                                                    </a>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </div>
                                            <div className="single_notify d-flex align-items-center">
                                                <div className="notify_thumb">
                                                    <a href="#"><img src="/admin/img/staf/3.png" alt="" /></a>
                                                </div>
                                                <div className="notify_content">
                                                    <a href="#">
                                                        <h5>what a packages</h5>
                                                    </a>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </div>
                                            <div className="single_notify d-flex align-items-center">
                                                <div className="notify_thumb">
                                                    <a href="#"><img src="/admin/img/staf/2.png" alt="" /></a>
                                                </div>
                                                <div className="notify_content">
                                                    <a href="#">
                                                        <h5>Cool Marketing </h5>
                                                    </a>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </div>
                                            <div className="single_notify d-flex align-items-center">
                                                <div className="notify_thumb">
                                                    <a href="#"><img src="/admin/img/staf/4.png" alt="" /></a>
                                                </div>
                                                <div className="notify_content">
                                                    <a href="#">
                                                        <h5>Awesome packages</h5>
                                                    </a>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </div>
                                            <div className="single_notify d-flex align-items-center">
                                                <div className="notify_thumb">
                                                    <a href="#"><img src="/admin/img/staf/3.png" alt="" /></a>
                                                </div>
                                                <div className="notify_content">
                                                    <a href="#">
                                                        <h5>what a packages</h5>
                                                    </a>
                                                    <p>Lorem ipsum dolor sit amet</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nofity_footer">
                                            <div className="submit_button text-center pt_20">
                                                <a href="#" className="btn_1">See More</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a className="CHATBOX_open" href="#"> <img src="/admin/img/icon/msg.svg" alt="" /> <span>2</span>
                                    </a>
                                </li>
                            </div> */}
                            <div className="profile_info">
                                <img src={avatarGenerator(user?.email)} alt="#" />
                                <div className="profile_info_iner">
                                    <div className="profile_author_name">
                                        <p>Super Admin </p>
                                        <h5>{user?.name}</h5>
                                    </div>
                                    <div className="profile_info_details">
                                        <div onClick={logoutHandler}>
                                            <a href="#">Log Out </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperadminTopbar;
