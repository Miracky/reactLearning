import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function SignUp() {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { email: "", password: "", passwordConfirm: "" },
    validationSchema,
  });

  return (
    <div onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        id="email"
        name="email"
        placeholder="Email"
        type="email"
        values={values.email}
        onChange={handleChange}
      />
      <br /> <br />
      <label>Password</label>
      <input
        id="password"
        name="password"
        placeholder="Password"
        type="password"
        values={values.password}
        onChange={handleChange}
      />
      <br /> <br />
      <label>Confirm Password</label>
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        placeholder="Confirm Password"
        type="password"
        values={values.passwordConfirm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SignUp;
