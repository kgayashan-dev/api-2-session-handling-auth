"use client";
import React from "react";

import { logout } from "../login/actions";

interface UserDashboardProps {
  role: string;
}

export default function UserDashboard({ role }: UserDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard {role}
            </h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Logout
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Dashboard content cards could go here */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-semibold text-blue-800 mb-2">
                Recent Activity
              </h3>
              <p className="text-gray-600">No recent activity to display</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">Statistics</h3>
              <p className="text-gray-600">No statistics available</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 className="font-semibold text-purple-800 mb-2">
                Notifications
              </h3>
              <p className="text-gray-600">You have no new notifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
