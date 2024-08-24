import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/footer/Footer";
import Recipes from "./pages/recipes/Recipes";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={ <Home />}/>
        <Route path="/recipes" element={ <Recipes />}/>
        <Route path="/settings" element={ <Settings />}/>
      </Routes>
         <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
