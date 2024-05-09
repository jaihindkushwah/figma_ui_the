import React from "react";
import logo from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";
function Header({ ButtonComponent, className, style }) {
  const navigate = useNavigate();
  return (
    <header
      className={
        "fixed top-0 flex  items-center px-5 sm:py-4 py-3 " + className
      }
      style={style}
    >
      <img
        onClick={() => {
          navigate("/");
        }}
        style={{ cursor: "pointer" }}
        src={logo}
        alt="logo"
        className="object-cover sm:h-8 h-6"
      />
      <div className="flex flex-1 justify-end gap-3">{ButtonComponent}</div>
    </header>
  );
}

export default Header;
