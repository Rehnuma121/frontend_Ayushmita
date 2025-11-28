import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Breadcrumb({ title }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#faf7ee] pb-10 border-b border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 pt-10 flex flex-col items-center text-center">

        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-2">
          Home /
          <span
            className="text-[#F0A324] font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/treatmentdetails")}
          >
            {" "}Treatment
          </span>
        </p>

        {/* Title */}
        <h1 className="text-4xl font-bold mt-2">{title}</h1>
      </div>
    </div>
  );
}
