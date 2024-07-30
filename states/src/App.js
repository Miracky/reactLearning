import { useState } from "react";

function App() {
  const [name, setName] = useState("Mirac");
  const [age, setAge] = useState(21);
  const [friends, setFriends] = useState(["Yagmur", "Emrah"]);
  const [address, setAddress] = useState({ title: "Samsun", zip: 55050 });

  return (
    <div>
      <h1>
        MERHABA <br />
        {name}!! {age}
      </h1>
      <button onClick={() => setName("Ahmet")}>Click</button>
      <button onClick={() => setAge(1)}>++</button>
      <hr />
      <br />
      <h2>FRIENDS</h2>
      {friends.map((friend, index) => (
        <div key={index}> {friend} </div>
      ))}
      <button onClick={() => setFriends([...friends, "Sergen", "Yagmur"])}>
        ++
      </button>
      <hr />
      <h2>ADDRESS</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button onClick={() => setAddress({...address, title: "Ankara"})}>
        Add new address
      </button>
    </div>  
  );
}

export default App;
