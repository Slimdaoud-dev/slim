import Card from "../../../../components/card/Card";
import React from "react";

const General = () => {
  return (
    <Card className={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-8 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Make an appointement
        </h4>
        
      </div>
      {/* Cards */}
      <div className="grid grid-cols-2 gap-4 px-2">
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  dark:!bg-navy-700 dark:shadow-none relative before:absolute before:bottom-1 before:h-0.5 before:left-0  focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-blueSecondary focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ">
      <input
        id=""
        type="text"
        placeholder="Doctor Address"
        className="w-full bg-transparent pb-3   border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition dark:bg-navy-700 "
      />
        </div>



        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  dark:!bg-navy-700 dark:shadow-none relative before:absolute before:bottom-1 before:h-0.5 before:left-0  focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-blueSecondary focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ">
        <input
        id=""
        type="date"
        placeholder="Date"
        className="w-full bg-transparent pb-3   border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition dark:bg-navy-700 "
      />
        
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  dark:!bg-navy-700 dark:shadow-none relative before:absolute before:bottom-1 before:h-0.5 before:left-0  focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-blueSecondary focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ">
        <input
        id=""
        type="time"
        placeholder="Time"
        className="w-full bg-transparent pb-3   border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition dark:bg-navy-700 "
      />
        </div>


        {/* Bouton de soumission */}
        <div className="col-span-2 flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Confirm
          </button>
        </div>

        
      </div>
    </Card>
  );
};

export default General;
