import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import picture from "../assets/img/picture.png";
import logo from "../assets/img/logo-wetick.png";
import React from "react";
// import http from '../helpers/http'
import * as Yup from "yup";
import propTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage } from "../redux/reducers/auth";
import { asyncLoginAction } from "../redux/actions/auth";
import { FiEye, FiEyeOff } from "react-icons/fi";

const validationSchema = Yup.object({
  email: Yup.string().required().email("Email is Invalid"),
  password: Yup.string().required("Password is Invalid"),
});

const FormLogin = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const errorMessage = useSelector((state) => state.auth.errorMessage);
  const warningMessage = useSelector((state) => state.auth.warningMessage);
  const [iconEye, setIconEye] = React.useState(false);
  const [typePassword, setTypePassword] = React.useState(false);

  const handleInputPassword = () => {
    setIconEye(!typePassword);
    setTypePassword(!iconEye);
  };

  return (
    <form onSubmit={handleSubmit} className="w-[80%] flex flex-col gap-5">
      <Link to="/" className="flex text-2xl">
        <img src={logo} alt="Logo Wetick" />
        <span className="flex items-center text-[#E14D2A]">Once</span>
        <span className="flex items-center text-[#48E0E4]">tick</span>
      </Link>
      <div className="text-lg text-black">Sign In</div>
      <div className="text-[10px] text-black">
        Hi, Welcome back to Onceticket!
      </div>
      <div className="text-[10px] text-black">
        Don&apos;t have any account?{" "}
        <Link className="text-secondary" to="/register">
          Register Here
        </Link>
      </div>
      {errorMessage && (
        <div>
          <div className="alert alert-warning">{errorMessage}</div>
        </div>
      )}
      {warningMessage && (
        <div>
          <div className="alert alert-warning">{warningMessage}</div>
        </div>
      )}
      <div className="from-control">
        <input
          placeholder="Email"
          className={`input input-bordered w-full${
            errors.email && touched.email && "input-error"
          }`}
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.email}</span>
          </label>
        )}
      </div>
      <div className="from-control relative">
        <input
          placeholder="password"
          className={`input input-bordered w-full${
            errors.password && touched.password && "input-error"
          }`}
          type={typePassword ? "text" : "password"}
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (
          <label className="label">
            <span className="label-text-alt text-error">{errors.password}</span>
          </label>
        )}
        <button
          type="button"
          onClick={handleInputPassword}
          className="absolute top-[18px] right-4 text-[#E14D2A]"
        >
          {iconEye ? (
            <i className="">
              <FiEyeOff size={20} />
            </i>
          ) : (
            <i className="">
              <FiEye size={20} />
            </i>
          )}
        </button>
      </div>
      <div className="text-right">
        <Link className="text-primary fond-bold" to="/forgot-password">
          Forgot Password?
        </Link>
      </div>
      <div>
        <button
          disabled={isSubmitting}
          type="submit"
          className="btn btn-primary btn-block"
        >
          Sign In
        </button>
      </div>
      <div className="text-center text-[10px] text-black">or signin with</div>
      <div className="flex justify-center gap-5">
        <button className="btn btn-secondary bg-white border-primary hover:border-primary hover:bg-primary w-24">
          <FcGoogle size={25} />
        </button>
        <button className="btn btn-secondary bg-white border-primary hover:border-primary hover:bg-primary w-24">
          <FaFacebook color="#4267B2" size={25} />
        </button>
      </div>
    </form>
  );
};

FormLogin.propTypes = {
  values: propTypes.objectOf(propTypes.string),
  errors: propTypes.objectOf(propTypes.string),
  touched: propTypes.objectOf(propTypes.bool),
  handleBlur: propTypes.func,
  handleChange: propTypes.func,
  handleSubmit: propTypes.func,
  isSubmitting: propTypes.bool,
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const formError = useSelector((state) => state.auth.formError);

  React.useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const doLogin = async (values, { setSubmitting, setErrors }) => {
    dispatch(clearMessage());
    dispatch(asyncLoginAction(values));
    if (formError.length) {
      setErrors({
        email: formError.filter((item) => item.param === "email")[0].message,
        password: formError.filter((item) => item.param === "password")[0]
          .message,
      });
    }
    setSubmitting(false);
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="hidden md:flex flex-1 bg-primary">
          <div className="flex justify-center items-center">
            <img src={picture} />
          </div>
        </div>
        <div className="max-w-md w-full flex justify-center items-center">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={doLogin}
          >
            {(props) => <FormLogin {...props} />}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Login;
