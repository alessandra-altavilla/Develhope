export default function ReceiverMessageList({messages}) {
    return (
        <div>
            {messages.map((msg, index) => (
                <div 
                key={index}>
                    {msg.text}
                </div>
            ))}
        </div>
    )
}