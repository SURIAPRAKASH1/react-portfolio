import "./index.css";
import {
  About,
  Header,
  Footer,
  Testimonilas,
  Skills,
  Works,
} from "./container/index.jsx";
import { Navbar } from "./Components/index.jsx";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
