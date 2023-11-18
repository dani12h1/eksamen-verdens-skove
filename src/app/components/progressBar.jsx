"use client";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import * as Progress from "@radix-ui/react-progress";
import * as Slider from "@radix-ui/react-slider";

const ProgressBar = () => {
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState(null);
  const [selectedSliderValue, setSelectedSliderValue] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSliderChange = (value) => {
    setSelectedSliderValue(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("progress").select();

      if (error) {
        setFetchError("Failed to fetch data");
        setData(null);
        console.log(error);
      }

      if (data) {
        setData(data);
        setFetchError(null);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  const totalAmount = data ? data.reduce((acc, doner) => acc + doner.amount, 0) : 0;
  const progressPercentage = (totalAmount / 10000) * 100;

  const handleSupportClick = async () => {
    // Extract the first element from the array if it's an array
    const sliderValue = Array.isArray(selectedSliderValue) ? selectedSliderValue[0] : selectedSliderValue;

    // Pusher input data til supabase
    try {
      const { data, error } = await supabase.from("progress").upsert([
        {
          name,
          phonenumber: phoneNumber,
          amount: sliderValue,
          email: email, // Tilføjer den valgte mængde fra silderValue
        },
      ]);

      if (error) {
        console.error("Error pushing data to the database:", error);
      } else {
        console.log("Data successfully pushed to the database:", data);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="bg-white flex justify-center items-center w-screen h-screen">
      <div className="bg-green-800 h-[40vh] p-4">
        {fetchError && <p>{fetchError}</p>}
        {data && (
          <div>
            <p className="pb-3" key={data.amount}>
              {" "}
              {totalAmount} kvm købt ud af 10000
            </p>
            <Progress.Root
              className="relative overflow-hidden bg-white rounded-full w-[300px] h-[25px]"
              style={{
                transform: "translateZ(0)",
              }}
              value={progressPercentage}
            >
              <Progress.Indicator className="bg-green-500 w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]" style={{ transform: `translateX(-${100 - progressPercentage}%)` }} />
            </Progress.Root>
          </div>
        )}
        <div className="pt-3">
          <h3>Vælg antal kvm du vil redde</h3>
        </div>
        <div className="pt-3">
          <Slider.Root className="relative flex items-center select-none touch-none w-[200px] h-5" defaultValue={[50]} onValueChange={handleSliderChange} max={10000} step={1}>
            <Slider.Track className="bg-white relative grow rounded-full h-[3px]">
              <Slider.Range className="absolute bg-white rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-5 h-5 bg-white shadow-blackA4 rounded-[10px] hover:bg-violet3 focus:outline-none focus:shadow-blackA5" aria-label="Volume" />
          </Slider.Root>
          <p className="py-2 ">Antal kvm valgt {selectedSliderValue} </p>
        </div>
        <div className="flex flex-col gap-3">
          <input className="p-1 pt-3 text-black" placeholder="name" type="text" onChange={(e) => setName(e.target.value)} />
          <input className="p-1 pt-3 text-black" placeholder="phonenumber" type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
          <input className="p-1 pt-3 text-black" placeholder="email" type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="pt-3"></div>
        <button className="p-2 bg-green-500 text-white" onClick={handleSupportClick}>
          STØT
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
