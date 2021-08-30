import "bulma/css/bulma.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "./action/index";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  // 
  const list = useSelector((state) => state.todoReducer.list);

  const handleClick = () => {
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo app with the use of modern Redux ✍</h1>
        <div style={{ display: "flex", margin: "10px" }}>
          <input
            className="input is-primary"
            type="text"
            placeholder="Add todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="button is-success" onClick={handleClick}>
            +
          </button>
        </div>

        {list.map((data) => {
          return (
            <div style={{ display: "flex", margin: "5px" }} key={data.id}>
              <p style={{ width: "30rem", textAlign: "left" }}> {data.data} </p>

              <button
                className="button is-danger"
                onClick={() => dispatch(deleteTodo(data.id))}
              >
                X
              </button>
            </div>
          );
        })}

        <button
          className="button is-danger is-outlined"
          onClick={() => dispatch(removeTodo())}
        >
          Delete
        </button>
      </header>
    </div>
  );
}

export default App;
