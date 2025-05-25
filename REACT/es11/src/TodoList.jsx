import { useState } from "react";

export default function ToDoList() {
    const [toDos, setToDos] = useState([]);
    const [input, setInput] = useState("");

    function handleChange(event) {
        setInput(event.target.value)
    }

  function handleAdd() {
    console.log("adding " + input + " parameter to the list...")
    setToDos([...toDos, input])
    console.log("added todo, the new list is: ", toDos)
    setInput("")
  }

  function handleReset() {
    console.log("resetting the list...")
    setToDos([])
    setInput("")
  }

  function handleRemove(index) {
    console.log("removing element at index: " + index)
    setToDos(toDos.filter((e, i) => i !== index))
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleChange}/>
      <button onClick={handleAdd}>Add to do</button>
      <button onClick={handleReset}>Reset list</button>

      <ul>
        {toDos.map((toDo, index) => 
                <div key={index}>
                    <li>{toDo}</li>
                    <button onClick={() => handleRemove(index)}>remove</button>
                </div>
        )}
      </ul>
    </div>
  );
}
