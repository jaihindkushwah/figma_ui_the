import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessAnimation from "../components/SuccessAnimation";
import Header from "../components/Header";

function SuccessPage() {
  const [second, setSecond] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const sec = second - 1;
    const timer = setTimeout(() => {
      setSecond(sec);
    }, 1000);
    if (second === 0) {
      navigate("/");
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [second]);

  return (
    <>
      <Header className={"mt-4"} />
      <div className="h-screen flex justify-center items-center font-sans">
        <div className="max-w-[600px] flex justify-center items-center flex-col">
          <SuccessAnimation height="150px" />
          <span className="w-full flex flex-col justify-center items-center gap-3">
            <p className="shadows-into-light-regular text-3xl text-green-500 font-medium">
              Success Submitted
            </p>
            <h3 className="sm:text-5xl text-3xl font-semibold">
              Congratulations
            </h3>
            <p className="text-center text-slate-600 sm:text-2xl">
              Your request has been successfully submitted to us. We will
              validate your information and reach out to your shortly with
              updates
            </p>
          </span>
        </div>
        <div className="w-screen fixed bottom-1 flex justify-center items-center">
          <p className="text-[14px] text-[#727272] mb-3">
            Redirecting you to Homepage in{" "}
            <span className="text-black font-semibold">{second} Seconds</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
