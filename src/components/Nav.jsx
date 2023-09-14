import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full py-2 px-2 flex justify-between items-center border-b border-gray-500">
      <Link
        to={"/"}
        className="text-[30px] text-black px-2 my-2 font-bold mx-4 rounded-md bg-blue-600"
      >
        SharEnv
      </Link>
      <Link
        to={"/login"}
        className="text-[24px] mx-6 my-2 border px-6 rounded-md hover:bg-white hover:text-black"
      >
        Login
      </Link>
    </div>
  );
};
export default Nav;
