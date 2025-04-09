import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import stackofbooks from "../assets/stackofbooks.png";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col mt-35 items-center justify-center">
      <img
        className="w-40"
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        src={stackofbooks}
      />
      <Header title={"404 Not Found"} />
      <div className="text-xl text-[#7D0A0A] mb-8 mt-0">
        Oops! We can't find this page.
      </div>
      <button
        onClick={() => navigate("/preface")}
        className="px-8 py-3 border-2 border-[#7D0A0A] text-[#7D0A0A] 
                 rounded-lg hover:bg-[#7D0A0A] transition-all duration-300
                 font-semibold cursor-pointer hover:text-white"
      >
        Back to Preface
      </button>
    </div>
  );
}

export default NotFound;
