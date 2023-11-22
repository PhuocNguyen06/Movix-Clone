import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const validationSchema = Yup.object({
  fullname: Yup.string().required('Full Name is required'),
  username: Yup.string().min(5, 'Username must be at least 5 characters').required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .matches(/^(?=.*[!@#$%^&*])/, 'Password must contain at least one special character')
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

function SignUp() {

  const [showPassword, setShowPassword] = useState(false);

  const { handleChange, handleBlur, values, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-blue">
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md opacity-67">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Create an account to start your membership
          </h1>
          <div className="space-y-4">
            <span className="text-gray-700">
              Just a few more steps and you're done! We hate paperwork, too.
            </span>

            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className={`border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 ${touched.fullname && errors.fullname ? "border-red-500" : ""
                }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullname}
            />
            {touched.fullname && errors.fullname && (
              <div className="text-red-500 text-sm">{errors.fullname}</div>
            )}

            <input
              type="text"
              name="username"
              placeholder="Username"
              className={`border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 ${touched.username && errors.username ? "border-red-500" : ""
                }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {touched.username && errors.username && (
              <div className="text-red-500 text-sm">{errors.username}</div>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 ${touched.email && errors.email ? "border-red-500" : ""
                }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {touched.email && errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className={`border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 ${touched.password && errors.password ? 'border-red-500' : ''
                  }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePassword}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 ${touched.confirmPassword && errors.confirmPassword ? 'border-red-500' : ''
                }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />

            {touched.confirmPassword && errors.confirmPassword && (
              <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
            )}
          </div>

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="agreeToTerms"
              name="agreeToTerms"
              className="mr-2"
              checked={values.agreeToTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label htmlFor="agreeToTerms" className="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-blue-400 flex justify-center text-white py-3 px-12 rounded mt-4 ml-20"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
