import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchRecipe, fetchRecipes } from "../utils";
import Loading from "../components/Loading";
import Header from '../components/Header'
import { AiFillPushpin } from "react-icons/ai"
import { BsPatchCheck } from "react-icons/bs"
import RecipeCard from '../components/RecipeCard'

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const getRecipe = async (id) => {
    try {
      setLoading(true);

      const data = await fetchRecipe(id);
      setRecipe(data);

      const recommendedRecipes = await fetchRecipes({
        query: recipe?.label,
        limit: 5,
      });
      setRecipes(recommendedRecipes);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe(id);
  }, [id]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Header
      title={recipe?.label} image={recipe?.image}
      />
    </div>
  )
};

export default RecipeDetails;
