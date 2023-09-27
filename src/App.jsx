import React from "react";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-black">
      <div className="app">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="recipes/:id" element={<RecipeDetails />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
