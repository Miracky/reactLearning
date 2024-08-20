import "./App.css";
import Container from "./components/Container";
import {ChatProvider} from "./context/ChatContext";

function App() {
  return (
  <ChatProvider> 
    <Container></Container> 
  </ChatProvider>
  
)}

export default App;
