import React, { useState } from 'react'

function Password({ value, onChange, ...restProps }: any) {

  const [show, setShow] = useState(false);

  return (
    <div className="form-group pass_show">
      <input
        value={value}
        onChange={onChange}
        {...restProps}
        type={!show ? "password" : "text"}
        className="form-control"
      />
      <span className="ptxt" onClick={() => setShow(!show)}>Show</span>
    </div>
  )
}

export default Password