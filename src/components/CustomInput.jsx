import React from "react";

function CustomInput({
  error,
  errorIcon,
  placeholder,
  inputClass,
  name,
  errorClass,
  ...props
}) {
  return (
    <span className=" w-full sm:px-0 px-2">
      <input
        placeholder={placeholder}
        className={
          "w-full h-15 rounded-full bg-[#EFEFEF] sm:px-8 px-5 sm:py-5 py-3 text-xl sm:text-2xl  focus:outline-blue-500 " +
          inputClass
        }
        name={name}
        {...props}
      />
      {error && (
        <p
          className={
            "ml-5 text-red-600 mt-1 text-[14px] font-semibold flex gap-2 items-center " +
            errorClass
          }
        >
          {errorIcon}
          {error}
        </p>
      )}
    </span>
  );
}

export default CustomInput;
