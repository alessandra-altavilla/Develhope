export default function AlertClock({clickHandler}) {
    
    return <div>
        <p>Click the button below to show the current time</p>
        <button onClick={clickHandler}>Click me!</button>
    </div>
}

