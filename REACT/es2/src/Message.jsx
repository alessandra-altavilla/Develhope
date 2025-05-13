export default function Message({eta}) {
    return <div>
    
    {eta > 18 ? <p>Che bella giornata!</p> : <p>You are very young!</p> }
    </div>
}