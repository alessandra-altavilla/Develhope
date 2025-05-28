import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export default function Hello () {
    const language = useContext(LanguageContext) 
    return (
        <div>
            <h2>{Translation[language]["Hello, World"]}</h2>
            </div>
    )
}

const Translation = {
    it: {
        "Hello, World": "Ciao, Mondo!"
    },
    en: {"Hello, World": "Hello, World!"

    },

    fr:{
        "Hello, World": "Bonjour, le monde!"
    },
    sp:{
        "Hello, World": "¡Hola, Mundo!"
    },
    gr: {"Hello, World": "Γειά σου, Κόσμε!"

    }
}