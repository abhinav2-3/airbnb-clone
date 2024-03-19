import React from "react";
import LoginCard from "../components/LoginCard";

const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center gap-4 place-items-center">
      <LoginCard
        title={"Teacher Portal"}
        desc={"You can add Students, Edit, Remove and Mark Attendence"}
        link={"/teacherSignup"}
      />
    </div>
  );
};

export default Home;
