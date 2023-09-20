import { Routes, Route, Outlet, } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
    <div className=" bg-black">
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
