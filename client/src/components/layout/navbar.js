import React, { useState } from "react";
import "../../styles/components/Navbar.css";
import { Pages } from "./Pages";
import { Link, useHistory } from "react-router-dom";
import User from "../../assets/user.png";
function Navbar() {
  const [login, setLogin] = useState(false);
  const history = useHistory();
  return (
    <div className="Navbar">
      <div className="navbar_main">
        <div className="nav_logo" onClick={() => history.push("/")}>
          <h4>xDAStays</h4>
        </div>
        <div className="nav_content">
          {Pages?.map((item) => (
            <span>
              <Link
                className="navbar_link"
                style={{ textDecoration: "none", color: "white" }}
                to={item.path}
              >
                {item?.label}
              </Link>
            </span>
          ))}

          <span className="login_span" onClick={() => setLogin(prevData=>!prevData)}>
            <img src={User} style={{ width: "100%" }} />
          </span>
        </div>
      </div>
      {login ? (
        <div className="login_dropdown">
          <div className="dropdown_content">
            <span>Sign Up</span>
            <span>Log In</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
