
import { useEffect } from "react"
import { useRef } from "react"

export default function FocusableInput() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    console.log(inputRef)
    return(
        <input type="text" ref={inputRef} placeholder="Write here..."/>
    )
}  