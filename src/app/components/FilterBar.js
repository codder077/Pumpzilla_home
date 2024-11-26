"use client";
import { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export default function FilterBar({ onSearch, onFilterChange, onSortChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Launched Time");

  const filters = ["Launched Time", "Trading Volume", "Market Cap", "24H Price Inc."];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex justify-between items-center bg-[#30313AE0] py-2 px-4 rounded-lg">
      {/* Filters */}
      <div className="flex space-x-4 ">
        {filters.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => handleFilterChange(filter)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition 
              ${
                activeFilter === filter
                  ? "bg-lime-500 text-black"
                  : "bg-[#4C4C5A] text-gray-400 hover:bg-gray-600"
              }`}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-[#FFFFFF] rounded-full w-96 overflow-hidden">

          <button className="px-4 text-gray-400 hover:text-black">
      <MagnifyingGlassIcon className="h-5 w-5" />
    </button>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="SEARCH TOKENS"
          className="bg-[#FFFFFF] text-gray-300 placeholder-gray-400 px-4 py-2 w-full focus:outline-none text-sm text-center"
        />
      </div>

      {/* Sort Button */}
      <button
        onClick={() => setShowSortMenu(!showSortMenu)}
        className="flex items-center px-4 py-2 bg-[#4C4C5A] text-white text-sm font-medium rounded-full hover:bg-gray-600 transition"
        style={{ fontFamily: "Bebas Neue"  , fontWeight:"400" , fontSize: "22px"}}
      >
        SORT BY
        <i className={`ml-2 fas ${showSortMenu ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </button>
    </div>
  );
}
