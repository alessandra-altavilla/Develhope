import CounterDisplay from "./CounterDisplay";
import Login from "./Login";
import Welcome from "./Welcome";

export default function Index() {
  return (
    <div>
      <Welcome name="John" />
      <CounterDisplay count={5} />
      <Login onLogin={(data) => console.log("Dati login:", data)} />
    </div>
  );
}
