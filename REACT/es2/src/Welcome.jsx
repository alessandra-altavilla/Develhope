import Age from "./Age";
import Message from "./Message";

export default function Welcome({ name, age }) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      {<Age eta={age} />}
      {age > 18 && <Age eta={age} />}
      {age && <Age eta={age} />}
      {age > 18 && age < 65 && <Age eta={age} />}
      {age > 18 && name == "John" && <Age eta={age} />}
      <Message eta={age} />
    </div>
  );
}
