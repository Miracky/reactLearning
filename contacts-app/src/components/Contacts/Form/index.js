import React, { useState } from "react";

function Form() {
  const [form, setForm] = useState({ fullname: "", phoneNumber: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(form.fullname==='' || form.phoneNumber===''){
        return false
    }
    console.log(form);
  };

  return (
    <form>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button onClick={onSubmit}>Add</button>
      </div>
    </form>
  );
}

export default Form;
