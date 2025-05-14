export default function Message({age}) {
    return <div>
    
    {age > 18 ? <p>What a nice day!</p> : <p>You are very young!</p> }
    </div>
}