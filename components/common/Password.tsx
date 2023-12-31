import React, { useState } from "react";

function Password({ value, onChange, ...restProps }: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="form-group pass_show mb-0">
      <input
        style={{ color: "gray !important" }}
        autoComplete="false"
        value={value}
        onChange={onChange}
        type={!show ? "password" : "text"}
        className="form-control mb-0 bg-white border"
        {...restProps}
      />
      <span className="ptxt" onClick={() => setShow(!show)}>
        Show
      </span>
    </div>
  );
}

export default Password;
