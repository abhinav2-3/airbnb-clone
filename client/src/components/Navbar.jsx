import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border w-screen grid py-4 place-items-center">
      <nav className="border w-[80%] text-black  py-2 px-20 rounded-3xl text-xl font-semibold flex justify-between place-items-center gap-8 hover:scale-110 duration-300">
        <Link to={"/"} className="text-4xl font-bold">
          Skillex.
        </Link>
        <div className="flex gap-8">
          <Link to={"/categories"}>Categories</Link>
          <Link to={"/courses"}>Courses</Link>
        </div>
        <div className="flex gap-8">
          <Link to={"/login"}>Login</Link>
          <Link
            to={"/signup"}
            className="rounded-3xl bg-black py-1 px-4 text-white"
          >
            Signup
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
