import { useEffect } from "react";
import { useState } from "react"

export function Counter({initValue = 0, incrementValue = 1}) {
    const [counter, setCounter] = useState(initValue);

    useEffect(() => {
        console.log(`The value of the counter is ${counter}`)
    }, [counter])

    function handleIncrement() {
        setCounter((c) => c + incrementValue)
    }

    return(
        <>
            <h2>
                {counter}
            </h2>
            <button onClick={handleIncrement}>
                Increment the value
            </button>
        </>
    )
}