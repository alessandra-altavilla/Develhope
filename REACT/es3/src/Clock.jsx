import { useEffect, useState } from "react"

export function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString())


    useEffect(() => {
            setTimeout(1000);
            let now = new Date().toLocaleTimeString();
            setTime(now);
    }, [time])
    return (
    <>
    <h2>
        {time}
    </h2>
    </>
    )
}