import { useState } from "react";
import ReceiverMessageList from "./ReceiverMessageList";
import SenderMessageList from "./SenderMessageList";

export function Chat() {
    const [message, setMessage] = useState("");
    const [receiverMessages, setReceiverMessages] = useState([]);
    const [senderMessages, setSenderMessages] = useState([]);


  const sendReceiverMessage = (message) => {
    setReceiverMessages([...receiverMessages, {text: message}])
    setMessage("")
  }

  const sendSenderMessage = (message) => {
    setSenderMessages([...senderMessages, {text: message}])
    setMessage("")
  }

  return (
    <div>
      <h1>Chat app</h1>
      <div>
      <ReceiverMessageList messages={receiverMessages} />
      <SenderMessageList messages={senderMessages} />
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write here..."
        />
      </div>
      <div>
        <button onClick={() => sendReceiverMessage(message)}>Send from receiver</button>
        <button onClick={() => sendSenderMessage(message)}>Send from sender</button>
      </div>
    </div>
  );
}
