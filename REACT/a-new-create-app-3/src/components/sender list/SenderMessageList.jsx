import "../receiver message list/receiver.css"; // Shared CSS with ReceiverMessageList

export default function SenderMessageList({ messages }) {
    return (
        <div className="sender-messages">
            {messages.map((message, index) => (
                <div key={index} className="message sender-message">
                    <div className="message-content">
                        {message.text}
                    </div>
                </div>
            ))}
        </div>
    );
}