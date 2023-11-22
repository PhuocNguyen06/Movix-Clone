import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().min(5, 'Username must be at least 5 characters').required('Username is required'),
  password: Yup.string()
    .matches(/^(?=.*[!@#$%^&*])/,'Password must contain at least one special character')
    .min(4, 'Password must be at least 4 characters')
    .required('Password is required'),
});

function LogIn() {
  const { handleChange, handleBlur, values, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-blue">
      <form onSubmit={handleSubmit}>
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md opacity-67">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            LogIn Account
          </h1>
          <div className="space-y-4">
            <span className="text-gray-700">
              Just a few more steps and you're done! We hate paperwork, too.
            </span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={`border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 ${
                touched.username && errors.username ? "border-red-500" : ""
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {touched.username && errors.username && (
              <div className="text-red-500 text-sm">{errors.username}</div>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500 ${
                touched.password && errors.password ? 'border-red-500' : ''
              }`}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {touched.password && errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-blue-400 flex justify-center text-white py-3 px-12 rounded mt-4"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
