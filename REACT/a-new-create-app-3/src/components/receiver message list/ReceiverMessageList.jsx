import "../receiver message list/receiver.css"; // Assuming you have a shared CSS file for message styling

export default function ReceiverMessageList({ messages }) {
    return (
        <div className="receiver-messages">
            {messages.map((message, index) => (
                <div key={index} className="message receiver-message">
                    <div className="message-content">
                        {message.text}
                    </div>
                </div>
            ))}
        </div>
    );
}