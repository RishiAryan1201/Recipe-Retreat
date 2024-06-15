
import { Link } from "react-router-dom";
import { GlobalContext } from "./Context";
import { useConst } from "@chakra-ui/react";
import { useContext } from "react";


const Navbar = () => {
    const {searchParam, setsearchParam, handleSubmit} = useContext(GlobalContext);
    console.log(searchParam);
    return (
    <nav className="flex justify-between items-center py-8 px-6 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold text-gray-400"><Link to="/">Recipe Retreat</Link></h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Search"
          placeholder="Enter-Item"
          valuse={searchParam}
          onChange={(e)=> setsearchParam(e.target.value)}
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
            <li className="text-black hover:text-gray-700 duration-300"><Link to="/">Home</Link></li>
            <li className="text-black hover:text-gray-700 duration-300"><Link to="/favorites">favorites</Link></li>

      </ul>
    </nav>
  );
};

export default Navbar;
