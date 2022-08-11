import SuperadminLayout from '@/components/layout/superadmin'
import React from 'react'

function SuperAdminLogin() {
  return (
    <div className="col-lg-12">
      <div className="white_box mb_30">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="modal-content cs_modal">
              <div className="modal-header justify-content-center theme_bg_1">
                <h5 className="modal-title text_white">Log in</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div >
                    <input type="text" className="form-control" placeholder="Enter your email" />
                  </div>
                  <div >
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <a href="#" className="btn_1 full_width text-center">Log in</a>
                  <p>Need an account? <a data-toggle="modal" data-target="#sing_up" data-dismiss="modal" href="#"> Sign Up</a></p>
                  <div className="text-center">
                    <a href="#" data-toggle="modal" data-target="#forgot_password" data-dismiss="modal" className="pass_forget_btn">Forget
                      Password?</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuperAdminLogin