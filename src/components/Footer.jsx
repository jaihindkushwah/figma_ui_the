import { CopyrightOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" mt-12 sm:px-4 p-2  rounded-[32px] flex items-center h-22 sm:h-32  bg-[#F5F5F5]">
      <div className="flex  justify-between items-center w-full sm:flex-row sm:gap-0 gap-2 flex-col">
        <span className="flex sm:gap-3 gap-1 sm:text-[18px] text-[15px]">
          <CopyrightOutlined />
          <p>Talup 2023. All rights reserved</p>
        </span>
        <span className="flex sm:gap-4 gap-2 sm:text-[18px] text-[15px] underline ">
          <Link to="#">Terms &#38; Conditions</Link>
          <Link to="#">Privacy Policy </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
