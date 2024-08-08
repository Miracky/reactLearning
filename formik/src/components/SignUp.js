import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function SignUp() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  console.log(errors);

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          values={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div className="error" >{errors.email}</div>}
        <br /> <br />
        <label>Password</label>
        <input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          values={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div className="error">{errors.password}</div>}
        <br /> <br />
        <label>Confirm Password</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="Confirm Password"
          type="password"
          values={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && <div className="error">{errors.passwordConfirm}</div>}
        <br /> <br />
        <button type="submit">Submit</button>
        <br /> <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default SignUp;
