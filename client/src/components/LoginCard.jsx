import React from "react";
import { Link } from "react-router-dom";

const LoginCard = ({ title, desc, link }) => {
  return (
    <section className="lg:w-3/12 md:w-6/12 w-[70%] h-36 p-4 flex flex-col gap-2 rounded text-wrap bg-indigo-600">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="">{desc}</p>
      <Link to={link} className="text-yellow-400">
        Login/Signup
      </Link>
    </section>
  );
};

export default LoginCard;
