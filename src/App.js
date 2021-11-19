import { ChatEngine } from "react-chat-engine";
import Modal from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css'

const projectID = "7950e59b-dabb-418d-8af9-b50e1293b1c7"

const App = () => {

  if(!localStorage.getItem('username')) return <Modal />

  return (
    <ChatEngine 
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
    />
  );
}

export default App;
