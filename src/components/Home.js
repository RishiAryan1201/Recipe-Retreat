import { GlobalContext } from "./Context";
import { useContext } from "react";
import RecipeItem from "./RecipeList";
import Shimmer from "./Shimmer";
const Home = () => {
    const {recipelist,loading} = useContext(GlobalContext);
    if(loading) return <div>Loading... please wait!</div>
    return (
        <div className="py-8 w-full h-full mx-auto flex flex-wrap justify-center gap-10">
            {recipelist && recipelist.length > 0 ? (
                recipelist.map((item)=> <RecipeItem item={item} />)
            ): (
                <div>
                    <p className="h-screen justify-center lg:text-4xl text-xl text-center text-black font-extrabold">
                        Please Search something.
                    </p>
                </div>
                )
            }
        </div>
    );
};

export default Home;