"use client";

import React from "react";
import * as Progress from "@radix-ui/react-progress";
import { useEffect } from "react";

export const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0aXlqZmhwbG53bHJ5d3F5YmptIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTY5MzczNywiZXhwIjoyMDE1MjY5NzM3fQ.eYFo0PzX08UuW9HtGpF2Zc2vEEz-CHq7TfXCqVSuBz4";
export const ENDPOINT = "https://atiyjfhplnwlrywqybjm.supabase.co/rest/v1/progress";

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);
  console.log("hheeeey toppen");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(ENDPOINT, {
          method: "GET",
          headers: {
            apikey: API_KEY,
          },
        });
        const data = await response.json();
        console.log(data);
        console.log("hheeeey");

        // Use data to update progress (this is just an example, replace it with your logic)
        setProgress(data.progress);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    function callButton() {}

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Progress.Root
        className="relative overflow-hidden bg-blackA6 rounded-full w-[300px] h-[25px]"
        style={{
          transform: "translateZ(0)",
        }}
        value={progress}
      >
        <Progress.Indicator className="bg-white w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]" style={{ transform: `translateX(-${100 - progress}%)` }} />
      </Progress.Root>
    </>
  );
};

export default ProgressDemo;
