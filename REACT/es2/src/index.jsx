import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*Puoi utilizzare il componente Hello più di una volta nel componente App? Si
Cosa succede se lo fai? Viene visualizzato più volte lo stesso componente
Puoi eseguire il rendering del componente Message direttamente all'interno del componente App? Si
Cosa succede se lo fai? Viene visualizzato più volte lo stesso componente*/
