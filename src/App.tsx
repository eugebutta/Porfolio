import'./App.css'
import Home from './Home';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Header from './Header';
import Projects from './Projects';


function App() {
  return (
    <BrowserRouter>
    <Route  path="/"  component={Header} />
    <Route  path="/Home"  component={Home} />
    <Route  path="/Projects"  component={Projects} />
    </BrowserRouter>
  );
}

export default App;
