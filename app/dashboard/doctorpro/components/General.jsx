import Card from "../../../../components/card/Card";
import React from "react";

const General = () => {
  return (
    <Card className={"w-full h-full p-3"}>
    {/* Header */}
    <div className="mt-2 mb-8 w-full">
      <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
        General Information
      </h4>
      
    </div>
    {/* Cards */}
    <div className="grid grid-cols-2 gap-4 px-2">
    <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  dark:!bg-navy-700 dark:shadow-none relative before:absolute before:bottom-1 before:h-0.5 before:left-0  focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-blueSecondary focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300 ">
    <p className="text-sm text-gray-600">Name and Last Name</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          Doctor Name
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
      <p className="text-sm text-gray-600">Phone Number</p>
      <p className="text-base font-medium text-navy-700 dark:text-white">
        56548567
      </p>
    </div>

      <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-sm text-gray-600">Date of birth</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          11/11/1998
        </p>
      </div>

      <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-sm text-gray-600">gender</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          Female/male
        </p>
      </div>

      <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-sm text-gray-600">Qualification</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          ----
        </p>
      </div>

      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-sm text-gray-600">House address</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          Rte XXX-XX-X
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-sm text-gray-600">Major</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          ----
        </p>
      </div>
      <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <p className="text-sm text-gray-600">Wallet Address</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          X-8654312
        </p>
      </div>
    </div>
  </Card>
  );
};

export default General;
