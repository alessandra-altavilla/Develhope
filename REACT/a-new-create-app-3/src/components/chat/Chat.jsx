import { useState, useRef, useEffect } from "react";
import ReceiverMessageList from "../receiver message list/ReceiverMessageList";
import SenderMessageList from "../sender list/SenderMessageList";
import "../chat/chat.css";

export default function Chat() {
    const [message, setMessage] = useState("");
    const [receiverMessages, setReceiverMessages] = useState([]);
    const [senderMessages, setSenderMessages] = useState([]);
    const messagesEndRef = useRef(null);

    // Function to automatically scroll to the bottom
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [receiverMessages, senderMessages]);

  const handleSendMessage = () => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;
    
    // Alternate between sender and receiver
    if (senderMessages.length <= receiverMessages.length) {
        setSenderMessages([...senderMessages, { text: trimmedMessage }]);
    } else {
        setReceiverMessages([...receiverMessages, { text: trimmedMessage }]);
    }
    setMessage("");
};

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            <h1>Chat app</h1>
            <div className="messages-container">
                <div className="message-receiver">
                    <ReceiverMessageList messages={receiverMessages} />
                </div>
                <div className="message-sender">
                    <SenderMessageList messages={senderMessages} />
                </div>
                <div ref={messagesEndRef} />
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message here..."
                />
                <button 
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                >
                    Send
                </button>
            </div>
        </div>
    );
}