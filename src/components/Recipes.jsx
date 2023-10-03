import React, { useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import Loading from "./Loading";
import Searchbar from "./SearchBar";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("vegan");
  const [limit, setLimit] = useState(30);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchRecipe = async (e) => {
    e.preventDefault();
    fetchRecipe();
  };

  const showMore = () => {
    setLimit((prev) => prev + 10);
    fetchRecipe();
  };
  const fetchRecipe = async () => {
    try {
      const data = await fetchRecipes({ query, limit });
      setRecipes(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  // render api data when page mounts
  useEffect(() => {
    setLoading(true);
    fetchRecipe();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center pt-10 px-0 md:px-10">
        <form onSubmit={handleSearchRecipe} action="" className="w-full lg:w-2/4">
          <Searchbar
            placeholder="Chicken, Vegan, Cake"
            handleInputChange={handleChange}
            rightIcon={<BiSearchAlt2 className="text-gray-600" />}
          />
        </form>
      </div>
      {recipes?.length > 0 ? (
        <>
          <div className="w-full flex flex-wrap gap-10 px-0 lg:px-10 py-10">
            {recipes?.map((recipe, idx) => (
              <RecipeCard recipe={recipe} key={idx} />
            ))}
          </div>
          <div className="flex w-full item-center justify-center py-10">
            <button
              onClick={showMore}
              className="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
            >
              Show more
            </button>
          </div>
        </>
      ) : (
        <div className="text-white w-full items-center py-10">
          <p className="text-center">No recipe found</p>
        </div>
      )}
    </div>
  );
};

export default Recipes;
