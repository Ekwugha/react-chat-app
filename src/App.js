import { ChatEngine } from "react-chat-engine";
import Modal from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
// import 
import './App.css'


const App = () => {

  if(!localStorage.getItem('username')) return <Modal />

  return (
    <ChatEngine 
      height="100vh"
      projectID={process.env.REACT_APP_PROJECT_ID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} 
    />
  );
}

export default App;
