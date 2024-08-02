import React, { useEffect, useState } from "react";

const initiaFormlValues = {fullname: "", phoneNumber: "" };

function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initiaFormlValues);

  useEffect(() => {
    setForm(initiaFormlValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phoneNumber === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          value={form.phoneNumber}
          name="phoneNumber"
          placeholder="Phone Number"
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button onClick={onSubmit}>Add +</button>
      </div>
    </form>
  );
}

export default Form;
