import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import PostalPage from "./components/PostalPage";
import UniversitiesPage from "./components/UniversitiesPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/universities">
          <UniversitiesPage />
        </Route>
        <Route exact path="/postal">
          <PostalPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
