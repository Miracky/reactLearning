import "./App.css";
import Container from "./components/Container";
import { ChatProvider } from "./context/ChatContext";
import { ThemeProvider} from "./context/ThemeContext";

function App() {

  return (
    <div  className="App">
      <ThemeProvider value="dark">
        <ChatProvider>
          <Container></Container>
        </ChatProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
