import "./App.css";
import Header from "./containers/Header";

import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/porduct:productId" component={ProductDetails} />
          {/* <Route path="/productcomponent" component={ProductComponent} /> */}
          <Route>404 Not found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
