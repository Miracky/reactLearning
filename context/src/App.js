import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <ThemeProvider value="dark">
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
