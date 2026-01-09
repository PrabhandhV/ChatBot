import userProfile from '../assets/user.PNG';
import robotProfile from '../assets/robot.PNG';
import './ChatMessage.css';

export function ChatMessage({message, sender}) {
  // const message = props.message;
  // const sender = props.sender;

  /*
  if (sender === "user") {
    return (
      <div>
        {message}
        <img src="user.PNG" alt="User" width="30" height="30"/>
      </div>
    );
  } 
  
  else if (sender === "robot") {
    return (
      <div>
        <img src="robot.PNG" alt="Robot" width="30" height="30"/>
        {message}
      </div>
    );
  }
  */

  return (
    <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
      {sender === "robot" && (
        <img src={robotProfile} className="chat-message-profile"/>
      )}

      <div className="chat-message-text">
        {message}  
      </div>

      {sender === "user" && (
        <img src={userProfile} className="chat-message-profile"/>
      )}
    </div>
  );
}
