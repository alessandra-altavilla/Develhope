/*Crea un componente MouseClicker che contenga un pulsante con un attributo name impostato sulla stringa "one".
Collegare un gestore eventi al pulsante che, quando cliccato, 
visualizza l'attributo name sulla console leggendo la proprietà event.target.name.
Aggiungere un altro pulsante con l'attributo name impostato su "two" e un'immagine al suo interno, 
quindi aggiungere un altro gestore eventi che stampi l'origine dell'immagine sulla console quando si fa clic.
Come è possibile evitare che l'attributo name del pulsante venga 
visualizzato sulla console quando si fa clic sull'immagine? 
Utilizzando currentTarget.name che mostra il nome dell'elemento che si clicca invece di ciò che lancia la funzione*/

export default function MouseClicker() {
    function handleButtonClick(event) {
        console.log(event.target.name)
    }

    function handleSecondButtonClick(event) {
        console.log(event.target.src)
    }

    return (
    <div>
        <button name="one" onClick={handleButtonClick}>Click me!</button>
        <button name="two" onClick={handleSecondButtonClick}>
            <img src="https://placehold.co/24" height="24" width="24" />
            Click me!!
            </button>
    </div>
)}