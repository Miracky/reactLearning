import "./App.css";
import { useFormik } from "formik";
import SignUp  from "./components/SignUp";


function App() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      hobies: [],
      country: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    
  });

  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          placeholder="First name"
          values={values.firstName}
          onChange={handleChange}
        />
        <br /> <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          placeholder="Last name"
          values={values.lastName}
          onChange={handleChange}
        />
        <br /> <br />
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={values.gender === "male"}
          />
          <span>Male</span>
          <br />
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={values.gender === "female"}
          />
          <span>Female</span>
          <br />
          <input
            type="radio"
            name="gender"
            value="other"
            onChange={handleChange}
            checked={values.gender === "other"}
          />
          <span>Other</span>
        </div>
        <br />
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Football"
            onChange={handleChange}
          />
          Football
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Cinema"
            onChange={handleChange}
          />
          Cinema
        </div>
        <div>
          <input
            type="checkbox"
            name="hobies"
            value="Photography"
            onChange={handleChange}
          />
          Photography
        </div>
        <br /> <br />
        <select
          name="country"
          value="country"
          // value={values.country}
          onChange={handleChange}
        >
          {/* ilerde bir problem olursa yorum satirlari ogretilen
              <option value="turkey">Turkey</option>
              <option value="england">England</option>
              <option value="france">France</option>
              <option value="ireland">Ireland</option>
              <option value="russia">Russia</option> */}
          <option>Turkey</option>
          <option>England</option>
          <option>France</option>
          <option>Ireland</option>
          <option>Russia</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br /> <br />
        <SignUp></SignUp>
        <br /> <br />
        {JSON.stringify(values)}
      </form>
    </div>
  );
}

export default App;
