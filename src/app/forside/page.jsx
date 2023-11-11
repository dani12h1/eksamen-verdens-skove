import React from "react";
import ProgressDemo from "../components/progressBar";

function page() {
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-64 bg-green-500 flex justify-center items-center p-6">
        <ProgressDemo />
      </div>
    </div>
  );
}

export default page;
