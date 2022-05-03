import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Category />
        <Search />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
