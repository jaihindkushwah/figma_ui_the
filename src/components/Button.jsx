import React from "react";

function Button({ title, onClick, className, icon, ...props }) {
  return (
    <button
      className={`rounded-full
        sm:text-[18px] text-[14px] font-normal text-center
        border border-slate-300 ${className}`}
      onClick={onClick}
      {...props}
    >
      {title}
      {icon}
    </button>
  );
}

export default Button;
