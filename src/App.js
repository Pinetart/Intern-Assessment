import Navbar from "./components/Navbar/Navbar";
import Contact from "../src/pages/Contact";
import Discussion from "../src/pages/Discussion";
import Home from "../src/pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/discussion">
              <Discussion />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
