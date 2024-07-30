import "./App.css";
import User from "./components/User.js";
import Header from "./components/Header.js";
const friends = [
  {
    id: 1,
    name: "Yagmur",
  },
  {
    id: 2,
    name: "Emrah",
  },
  {
    id: 3,
    name: "Sergen",
  },
];

function App() {
  return (
    <div>
      <User
        name="Mirac"
        surName="KAYA"
        isLoggedIn={true}
        age={21}
        friends={friends}
        adress={{
          title:'Ilkadim/Samsun',
          zip: 55050
        }}
      ></User>
    </div>
  );
}
User.defaultProps = {
  isLoggedIn:false
}

export default App;
