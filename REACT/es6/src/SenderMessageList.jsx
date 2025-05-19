export default function SenderMessageList({messages}) {
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