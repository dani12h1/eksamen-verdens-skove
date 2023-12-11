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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("progress").select();

      if (error) {
        setFetchError("Failed to fetch data");
        setData(null);
        console.error("Fetch error:", error);
      } else {
        setData(data);
        setFetchError(null);

        const namesCount = data.length;
        setTotalNames(namesCount);
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setFetchError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const progressPercentage = (totalNames / 50) * 100;

  const handleSupportClick = async () => {
    try {
      setIsSubmitting(true);

      // Basic validation - check if name and email are filled
      if (!name || !email) {
        setFetchError("Udfyld navn og mail korrekt");
        // Optionally, show an error message to the user
        return;
      }

      await supabase.from("progress").upsert([
        {
          name,
          email,
        },
      ]);

      setEmail("");
      setName("");

      fetchData();

      console.log("Data sent successfully");
      // tømmer input felter når der trykkes send
    } catch (error) {
      console.error("Error pushing data to the database:", error);
      setFetchError("Error pushing data to the database");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
      <div className="bg-grøn h-auto w-[80vw] max-w-[320px] min-w-[25vw] lg:min-w-[400px] grid lg:max-w-[25vw] md:min-w-[35vw] lg:min-h-[65vh] p-4 lg:p-8 rounded-lg text-hvid bg-opacity-80">
        <h2 className=" text-hvid lg:text-4xl">Skriv under nu</h2>
        <p className="pb-3 text-hvid">Og stop kaffe, der rydder regnskov</p>
        {data && (
          <div className="font-bold">
            <p className=" text-hvid">{totalNames}/50</p>
            <div className="flex text-sm font-thin justify-between pb-1 ">
              <p className=" text-hvid">Underskrevet</p>
              <p className=" text-hvid">Vores mål</p>
            </div>
            <Progress.Root className="relative overflow-hidden bg-hvid rounded-full w-auto h-[2.5vh] lg:h-[3.5vh]" style={{ transform: "translateZ(0)" }} value={progressPercentage}>
              <Progress.Indicator className="bg-orange w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]" style={{ transform: `translateX(-${100 - progressPercentage}%)` }} />
            </Progress.Root>
          </div>
        )}
        <p className="py-3  text-hvid">Der ryddes årligt omkring 120.000 hektar skov på grund af kaffedyrkning. Støt vores appel for at stoppe skadelig kaffedyrkning og redde regnskovene.</p>
        {fetchError && <p className="text-red-500">{fetchError}</p>}
        <div className="flex flex-col gap-3 pt-3">
          <input className="p-1 pt-3 lg:h-14 lg:text-lg text-black" value={name} placeholder="Navn" type="text" onChange={(e) => setName(e.target.value)} />
          <input className="p-1 pt-3 lg:h-14 lg:text-lg text-black" value={email} placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="py-4 pt-5">
          <button className="p-2 -2 bg-orange rounded text-md lg:text-2xl text-hvid" onClick={handleSupportClick} disabled={isSubmitting}>
            {isSubmitting ? "Indsender..." : "Indsend"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
