import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      Name <br />
      <input name="name" value={form.name} onChange={onChangeInput}></input>
      <br />
      Surname <br />
      <input name="surname" value={form.surname} onChange={onChangeInput}></input>
      <h1>
        {form.name}
        {form.surname}
      </h1>
    </div>
  );
}

export default InputExample;
