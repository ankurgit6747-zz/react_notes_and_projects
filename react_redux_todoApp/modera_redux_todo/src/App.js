import 'bulma/css/bulma.css'

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo app with the use of modern Redux ✍</h1>
        <div>
          <input class="input is-primary" type="text" placeholder="Add todo" />
          <button class="button is-success">+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
