"use client";

import EmployeesAndCars2 from "@/Components/employees2";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

export default function Dashboard() {
  

  return (
    <div className="font-sans p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Dashboard, 
          {/* {user ? user : "Guest"}, {sessionStatus} */}
        </h1>
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          // onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <p className="text-lg text-gray-600 mb-8">
        {/* {sessionStatus === "Session active"
          ? "You have logged in successfully."
          : "Please log in."} */}
      </p>

      <EmployeesAndCars2 />
    </div>
  );
}
