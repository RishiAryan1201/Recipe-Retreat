import { createContext, useState } from "react";
export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
  const [searchParam, setsearchParam] = useState("");
  const [loading, setloading] = useState(false);
  const [recipelist, setrecipelist] = useState([]);
  const [recipeDetails, setrecipeDetails] = useState([]);
  const[favoriteslist, setfavoriteslist] = useState([]);
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setrecipelist(data?.data?.recipes);
        setloading(false);
        setsearchParam();
        navigate('/')
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setloading(false);
      setsearchParam("");
    }
  }

  function handleAddToFavorite(getCurrentItem){
    console.log(getCurrentItem);
    let cpyFavoritelist = [...favoriteslist];
    const index = cpyFavoritelist.findIndex(item=> item.id === getCurrentItem.id)

    if(index=== -1){
        cpyFavoritelist.push(getCurrentItem);
    }else{
        cpyFavoritelist.splice(index)
    }
    setfavoriteslist(cpyFavoritelist);
  }


  console.log(loading, recipelist);
  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipelist,
        setsearchParam,
        handleSubmit,
        recipeDetails,
        setrecipeDetails,
        favoriteslist, 
        setfavoriteslist,
        handleAddToFavorite,
        favoriteslist,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
// import { createContext } from "react";

// const UserContext = createContext({
//     user: {
//         name: "Rishi Aryan",
//         email: "support@eatfit.com",
//     },
// });
// export default UserContext;
