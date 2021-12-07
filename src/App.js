import './App.css';
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect } from 'react';

const loader = document.querySelector(".preloaders");

const showLoader = () => loader.classList.remove("preloaders");
const addClass = () => loader.classList.add("loader-hide");


function App() {
  useEffect(() => {
    showLoader();
    addClass();
  }, []);
  return (
    // <div style={{position: "relative"}}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        {/* <Route path="/users">

        </Route> */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
