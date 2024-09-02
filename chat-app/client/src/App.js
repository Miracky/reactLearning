import "./App.css";
import Container from "./components/Container";
import { ChatProvider } from "./context/ChatContext";
import { ThemeProvider, useTheme} from "./context/ThemeContext";

function App() {
  

  

  

  return (
    <div  className={`app`} >
      <ThemeProvider >
        <ChatProvider>
          <Container></Container>
        </ChatProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
