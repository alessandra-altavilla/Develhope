import _ from "lodash"
import { useMemo, useState } from "react";

export default function Memory() {

    const [selected, setSelected] = useState(null)
    const [punteggio, setPunteggio] = useState(0)

    const handleClick = (value) => {
        if (!selected) {
            setSelected(value)
        } 
        if (selected == value) {
            console.log("Hai beccato una copia!")
            setPunteggio(prev => prev+1)
            setSelected(null)
        } 
        
    }

    const element = useMemo(() => _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8]), []);
    console.log(element)

    return (
        <div>
            <h1>My memory {selected}</h1>
            <h2>Punteggio: {punteggio}</h2>
            <ul className="memory-container">
                {element.map((e, i) => <li onClick={() => handleClick(e)} key={`${e}-${i}`}>{e}</li> )}
            </ul>
        </div>
    )
}