import { useState, useRef, useEffect } from "react";
import ReceiverMessageList from "./ReceiverMessageList";
import SenderMessageList from "./SenderMessageList";
import "./Chat.css";

export function Chat() {
    const [message, setMessage] = useState("");
    const [receiverMessages, setReceiverMessages] = useState([]);
    const [senderMessages, setSenderMessages] = useState([]);
    const messagesEndRef = useRef(null);

    // Funzione per scorrere automaticamente in fondo alla chat
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [receiverMessages, senderMessages]);

    const handleSendMessage = (sendFunction) => {
        const trimmedMessage = message.trim();
        if (!trimmedMessage) return; // Non inviare se vuoto o solo spazi
        
        sendFunction(trimmedMessage);
    };

    const sendReceiverMessage = (message) => {
        setReceiverMessages([...receiverMessages, { text: message }]);
        setMessage("");
    };

    const sendSenderMessage = (message) => {
        setSenderMessages([...senderMessages, { text: message }]);
        setMessage("");
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            // Puoi scegliere quale funzione chiamare di default con Invio
            handleSendMessage(sendSenderMessage);
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
                    placeholder="Scrivi qui..."
                />
                <div className="buttons-container">
                    <button 
                        onClick={() => handleSendMessage(sendReceiverMessage)}
                        disabled={!message.trim()}
                    >
                        Invia come ricevitore
                    </button>
                    <button 
                        onClick={() => handleSendMessage(sendSenderMessage)}
                        disabled={!message.trim()}
                    >
                        Invia come mittente
                    </button>
                </div>
            </div>
        </div>
    );
}