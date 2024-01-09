import "./App.css";
import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Projects from "./views/Projects/Projects";
import AboutUs from "./views/AboutUs/AboutUs";
import Services from "./views/Services/Services";
import News from "./views/News/News";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/portafolio" component={Projects} />
      <Route exact path="/contacto" component={Contact} />
      <Route exact path="/sobre-nosotros" component={AboutUs} />
      <Route exact path="/servicios" component={Services} />
      <Route exact path="/novedades" component={News} />
    </div>
  );
}

export default App;
