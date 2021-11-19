import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import './App.css'



const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="7950e59b-dabb-418d-8af9-b50e1293b1c7"
      userName="Elo"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
    />
  );
}

export default App;
