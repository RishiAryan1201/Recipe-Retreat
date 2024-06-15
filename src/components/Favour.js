import { useContext } from "react";
import RecipeItem from "./RecipeList";
import { GlobalContext } from "./Context";

const Favour = () => {
    const {favoriteslist} = useContext(GlobalContext);
    return(
        <div className="py-8 container h-dvh mx-auto flex flex-wrap justify-center gap-10">
            {favoriteslist && favoriteslist.length > 0 ? (
                favoriteslist.map((item)=> <RecipeItem item={item} />)
            ) : (
                <div>
                    <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
                        Nothing is added in Favorites List.
                    </p>
                </div>
                )
            }
        </div>
    );
};

export default Favour;