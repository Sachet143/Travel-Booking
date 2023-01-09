import { TOKEN_KEY, USER_TYPE_KEY } from '@/services/constants';
import { avatarGenerator } from '@/services/helper';
import useUser from '@/services/hooks/useUser';
import { deleteCookie } from 'cookies-next';
import React from 'react'

function BusadminTopbar() {
  const { user } = useUser();

  function logoutHandler() {
    deleteCookie(USER_TYPE_KEY);
    deleteCookie(TOKEN_KEY);
    window.location.href = "/busadmin/login"
  }

  return (
    <div className="container-fluid g-0">
      <div className="row">
        <div className="col-lg-12 p-0 ">
          <div className="header_iner d-flex justify-content-between align-items-center">
            <div className="sidebar_icon d-lg-none">
              <i className="ti-menu" />
            </div>
            <div className="line_icon open_miniSide d-none d-lg-block cursor-pointer"
              onClick={() => {
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

              }}
            >
              <img src="/admin/img/line_img.png" alt="" />
            </div>
            <div className="header_right d-flex justify-content-between align-items-center">
              <div className="profile_info">
                <img src={avatarGenerator(user?.email)} alt="#" />
                <div className="profile_info_iner">
                  <div className="profile_author_name">
                    <p>Bus Admin </p>
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

export default BusadminTopbar