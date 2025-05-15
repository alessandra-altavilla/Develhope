import Hello from "./Hello";
import Welcome from "./Welcome";
import AlertClock from "./AlertClock";

function App() {
  function handleButtonClick() {
        const now = new Date()
        alert(`The current time is ${now.toLocaleTimeString()}`)
    }

    function stampaNome () {
      console.log("Ciao mi chiamo Alessandra")

    }

    function stampaNomeOnPage () {
      alert("Il mio nome è Alessandra")
    }
  return (
    <div>
      {/* <Hello />
      <Welcome name="Alessandra" age={21} /> */}
      <AlertClock clickHandler={handleButtonClick} />
      <AlertClock clickHandler={stampaNome} />
      <AlertClock clickHandler={stampaNomeOnPage} />
    </div>
  );
}

export default App;
