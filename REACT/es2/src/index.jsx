/*In un'applicazione React, crea un componente Welcome che riceva una prop name e una prop age. 
Crea un componente Age che riceva una prop age. 
Il componente Welcome renderizzerà un messaggio Welcome, {name}! all'interno del tag p e 5 componenti Age. 
Per ogni volta, utilizza il rendering condizionale con una delle seguenti condizioni:

Il componente Età viene renderizzato solo se la proprietà età è maggiore di 18.
Il componente Età viene renderizzato solo se è presente la proprietà età.
Il componente Età viene renderizzato solo se la proprietà età è maggiore di 18 e minore di 65.
Il componente Età viene renderizzato solo se la prop età è maggiore di 18 e la prop nome è uguale a "John".

Crea un nuovo componente Messaggio che riceva una prop età e che visualizzi lo stesso messaggio 
se la prop è maggiore di 18 anni, altrimenti visualizza il messaggio "Sei molto giovane!". 
Rendi il componente Messaggio all'interno del componente Benvenuto.*/

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

