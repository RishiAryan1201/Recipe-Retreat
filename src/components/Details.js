import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "./Context";

const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setrecipeDetails, handleAddToFavorite } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);
      if (data?.data) {
        setrecipeDetails(data?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto h-svh py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden group rounded-xl">
          <img
            src={recipeDetails?.recipe?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.recipe?.publisher}
        </span>
        <h3 className="text-2xl font-bold truncate text-black">
          {recipeDetails?.recipe?.title}
        </h3>
        <div>
          <button 
         onClick={()=> handleAddToFavorite(recipeDetails?.recipe)} 
         className="btn p-3 px-8 rounded-lg text-sm tracking-wider uppercase font-medium mt-3 inline-block shadow-md bg-black text-white">
            Save As Favorite
          </button>
        </div>
        <div>
            <span className="text-2xl font-semibold text-black">Ingredient</span>
            <ul className="gap-3 p-2 m-2 list-disc">
                {recipeDetails?.recipe?.ingredients.map((ingredient)=> <li className="gap-2">
                    <span className="text-xl font-semibold text-black">{ingredient.quantity} {ingredient.unit}</span>
                    <span className="text-xl font-semibold text-black">{ingredient.description}</span>
                </li>)
            }
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
