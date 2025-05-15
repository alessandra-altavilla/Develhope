/*Crea un componente funzione AlertClock che esegua il rendering di un pulsante.
Quando si clicca sul pulsante, dovrebbe essere visualizzato un avviso con l'ora corrente.
Esegui il rendering del componente AlertClock all'interno del componente App. 
Fai in modo che il gestore eventi venga ricevuto come prop dal componente AlertClock, 
invece di essere implementato all'interno del componente stesso.*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

