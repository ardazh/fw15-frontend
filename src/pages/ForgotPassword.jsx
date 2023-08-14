import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo-wetick.png";
import picture from "../assets/img/picture.png";
import React from "react";
import http from "../helpers/http";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const doForgot = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const { value: email } = event.target.email;
      const body = new URLSearchParams({ email }).toString();
      const { data } = await http().post("/auth/forgotPassword", body);
      console.log(data);
      setSuccessMessage(data.message);
      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
      setTimeout(() => {
        navigate("/resetPassword");
      }, 2000);
    } catch (error) {
      const message = error?.response?.data?.message;
      setErrorMessage(message);
    }
  };
  return (
    <div className="flex h-screen">
      <div className="hidden md:flex flex-1 bg-primary">
        <div className="flex justify-center items-center">
          <img src={picture} />
        </div>
      </div>
      <div className="max-w-md w-full flex justify-center items-center">
        <form onSubmit={doForgot} className="w-[80%] flex flex-col gap-5">
          <Link to="/" className="flex text-2xl">
            <img src={logo} alt="Logo Wetick" />
            <span className="flex items-center text-[#E14D2A]">we</span>
            <span className="flex items-center text-[#48E0E4]">tick</span>
          </Link>
          <div className="text-lg text-black">Forgot Password</div>
          <div className="text-[10px] text-black">
            You’ll get mail soon on your email
          </div>
          <div>
            {errorMessage && (
              <div className="alert alert-error">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}
            <input
              placeholder="Email"
              className="input input-bordered w-full"
              type="email"
              name="email"
            />
          </div>
          <div>
            <button className="btn btn-secondary text-white w-[215px] hover:btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
