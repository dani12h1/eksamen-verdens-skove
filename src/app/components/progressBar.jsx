"use client";

import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";

const ProgressBar = () => {
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalNames, setTotalNames] = useState(0);

  // Declare fetchData function outside useEffect
  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("progress").select();

      if (error) {
        setFetchError("Failed to fetch data");
        setData(null);
        console.log(error);
      } else {
        setData(data);
        setFetchError(null);

        // Calculate total number of names
        const namesCount = data.length;
        setTotalNames(namesCount);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  useEffect(() => {
    // Call fetchData function here
    fetchData();
  }, []);

  const progressPercentage = (totalNames / 10000) * 100;

  const handleSupportClick = async () => {
    try {
      await supabase.from("progress").upsert([
        {
          name,
          email,
        },
      ]);

      // Fetch updated data after submission
      fetchData();
    } catch (error) {
      console.error("Error pushing data to the database:", error);
    }
  };

  return (
    <div className="bg-white flex justify-center items-center w-screen h-screen">
      <div className="bg-grøn h-auto w-[25vw] min-w-[320px] md:min-w-[320px] p-4 rounded-md">
        <h1 className="pb-0">Skriv under nu</h1>
        <p className="pb-2">Og stop kaffe, der rydder regnskov</p>
        {fetchError && <p>{fetchError}</p>}
        {data && (
          <div className="font-bold">
            <p>{totalNames}/10000</p>
            <div className="flex text-sm font-thin justify-between">
              <p>Underskrevet</p>
              <p>Vores mål</p>
            </div>
            <Progress.Root className="relative overflow-hidden bg-white rounded-full w-auto h-[25px]" style={{ transform: "translateZ(0)" }} value={progressPercentage}>
              <Progress.Indicator className="bg-orange w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]" style={{ transform: `translateX(-${100 - progressPercentage}%)` }} />
            </Progress.Root>
          </div>
        )}
        <p className="py-3">Der ryddes årligt omkring 120.000 hektar skov på grund af kaffedyrkning. Støt vores appel for at stoppe skadelig kaffedyrkning og redde regnskovene.</p>
        <div className="flex flex-col gap-3 pt-3">
          <input className="p-1 pt-3 text-black" placeholder="Navn" type="text" onChange={(e) => setName(e.target.value)} />
          <input className="p-1 pt-3 text-black" placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="py-4 pt-5">
          <button className="p-2 -2 bg-orange rounded text-white" onClick={handleSupportClick}>
            Indsend
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
