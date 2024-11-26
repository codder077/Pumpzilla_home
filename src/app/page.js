"use client";

import Navbar from './components/Navbar';
import TokenSection from './components/TokenSection';
import Card from './components/Card';
import FilterBar from './components/FilterBar';
import Pagination from './components/Pagination';
import { useState } from 'react';

const cardData = Array.from({ length: 84 }).map((_, idx) => ({
  timeAgo: "1 hr 25 mins ago",
  image: "/nft.png", // Replace with actual image URL
  title: "CAT SWAP PROMOTION",
  creator: `0xcb455..${4586 + idx}`,
  description:
    "Community owned 100%. No Team wallets. Let's pump. Launched by Justin Sun......Community owned 100%. No Team wallets. Let's pump. Launched by Justin SunCommunity owned 100%. No Team wallets. Let's pump......",
  marketCap: "19.99K",
}));
export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState(null); // Active filter (e.g., "LISTED_ON_UNISWAP")
  const [sortOrder, setSortOrder] = useState(null); // "ASC" or "DESC"
  const itemsPerPage = 12;

  const handleSearch = (query) => setSearchQuery(query);
  const handleFilterChange = (filter) => setFilter(filter);
  const handleSortChange = (order) => setSortOrder(order);

  // Filter logic
  const filteredCards = cardData.filter((card) => {
    if (filter === "LISTED_ON_UNISWAP") {
      return card.isUniswapListed; // Assume `isUniswapListed` is a property in `cardData`
    }
    return card.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Sort logic
  const sortedCards = [...filteredCards].sort((a, b) => {
    if (sortOrder === "ASC") return a.marketCap - b.marketCap;
    if (sortOrder === "DESC") return b.marketCap - a.marketCap;
    return 0;
  });

  // Pagination logic
  const currentCards = sortedCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#1E1E25]  text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="px-3 py-1">
        <TokenSection />
      </div>

      {/* Filter Bar */}
      <FilterBar
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 px-4 py-8">
        {currentCards.length > 0 ? (
          currentCards.map((data, index) => <Card key={index} data={data} />)
        ) : (
          <p className="text-gray-400">No results found.</p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedCards.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        © 2024 Pumpzilla. All Rights Reserved.
      </footer>
    </div>
  );
}

