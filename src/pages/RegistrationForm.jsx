import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import CustomInput from "../components/CustomInput";
import { Formik } from "formik";
import * as yup from "yup";

const CloseButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      className="text-black py-3 px-4  bg-white hover:bg-[#F1F1F1]"
      icon={<CloseOutlined />}
      onClick={() => navigate("/")}
    />
  );
};

const formSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name is too short"),
  email: yup
    .string()
    .email("Invalid email address")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/,
      "Invalid email address"
    )
    .required("Email is required"),
});
function RegistrationForm() {
  const navigate = useNavigate();
  return (
    <>
      <Header
        className={"mt-4 px-10 w-screen "}
        ButtonComponent={<CloseButton />}
      />
      <div className=" w-screen min-h-screen flex justify-center items-center ">
        <Formik
          validationSchema={formSchema}
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            navigate("/success");
            console.log(values);
          }}
        >
          {({ errors, handleChange, handleSubmit }) => (
            <div className="max-w-[600px] flex justify-center items-center sm:gap-6 gap-4 flex-col">
              <h1 className="sm:text-4xl text-2xl tracking-wider shadows-into-light-regular text-green-500 font-medium">
                Registration Form
              </h1>
              <p className=" mb-7 sm:text-5xl text-4xl text-center font-semibold">
                Start your success journey here!
              </p>
              <div className="w-[70%] flex justify-center items-center sm:gap-6 gap-4 flex-col">
                <CustomInput
                  errorIcon={<ExclamationCircleOutlined />}
                  placeholder={"Enter your name"}
                  name={"name"}
                  error={errors.name}
                  onChange={handleChange}
                />
                <CustomInput
                  errorIcon={<ExclamationCircleOutlined />}
                  placeholder={"Enter your email"}
                  name={"email"}
                  error={errors.email}
                  onChange={handleChange}
                />
                <Button
                  className={` w-full sm:py-5 py-3 text-white  sm:mt-4 mt-2 ${
                    errors.name || errors.email
                      ? "bg-[#C9C9C9]"
                      : "bg-black sm:mx-0 mx-2"
                  } bg-[#C9C9C9] `}
                  title={"Submit"}
                  onClick={handleSubmit}
                  disabled={errors.name || errors.email ? true : false}
                  type="button"
                />
              </div>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default RegistrationForm;
