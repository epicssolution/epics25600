"use client";

import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/utils";
import { FaSearch } from "react-icons/fa"; // Using React Icons for better visuals
import { client } from "@/sanity/lib/client"; // Assume sanity client is correctly set up

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Handle search and fetch results from Sanity
  const handleSearch = async (query) => {
    if (!query) {
      setSearchResults([]); // Clear results if search is empty
      return;
    }
    const querySanity = `
      *[_type in ["AI", "Eng", "equipment", "development", "dev", "energy", "waste"] && title match $query]{
        title,
        description,
        "slug": slug.current,
        image,
      }
    `;
    const results = await client.fetch(querySanity, { query });
    setSearchResults(results);
  };

  const handleCategorySelect = (slug) => {
    setCategory(slug);
    setMenuOpen(false); // Close the menu after selecting a category
  };

  return (
    <header className="w-full bg-white shadow-lg flex flex-col items-center p-4 px-6 relative dark:bg-dark text-dark dark:text-light transition-all ease">
      {/* Top Row: Logo, Search, and Menu Icon */}
      <div className="flex items-center justify-between w-full relative">
        <Logo />
        {/* Search Bar - Positioned between the logo and the search icon */}
        <div className="absolute left-1/2 transform -translate-x-1/2 transition-all ease-in-out">
          {searchOpen && (
            <div className="flex items-center border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-md px-4 py-2 w-96 bg-white dark:bg-dark">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                placeholder="Search..."
                className="p-2 w-full border-none rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-dark dark:text-light dark:border-gray-600"
              />
              <button
                className="p-2 bg-pink-600 text-white rounded-md ml-2"
                onClick={() => handleSearch(searchQuery)}
                aria-label="Search"
              >
                <FaSearch />
              </button>
            </div>
          )}
        </div>
        {/* Search Toggle Button */}
        <button
          className="text-black p-2 dark:text-white"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Toggle Search"
        >
          <FaSearch className="text-lg" />
        </button>
        {/* Menu Toggle Button - Only Visible on Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-black p-2 dark:text-white"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu - Slide In from Left */}
      <div
        className={cx(
          "absolute top-0 left-0 w-64 h-full bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out z-50 sm:hidden",
          menuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-2 right-2 text-2xl text-black"
          aria-label="Close Menu"
        >
          ✖️
        </button>
        <nav className="flex flex-col items-start space-y-6 font-semibold text-lg dark:bg-dark text-dark dark:text-light">
          <Link href="/" className="hover:text-indigo-600 transition-colors" onClick={() => handleCategorySelect('home')}>Home</Link>
          <Link href="/dev" className="hover:text-indigo-600 transition-colors" onClick={() => handleCategorySelect('dev')}>Development</Link>
          <Link href="/equipment" className="hover:text-indigo-600 transition-colors" onClick={() => handleCategorySelect('equipment')}>Equipment</Link>
          <Link href="/ai" className="hover:text-indigo-600 transition-colors" onClick={() => handleCategorySelect('ai')}>Artificial Intelligence</Link>
          <Link href="/eng" className="hover:text-indigo-600 transition-colors" onClick={() => handleCategorySelect('eng')}>Designing</Link>
          <Link href="/mar" className="hover:text-indigo-600 transition-colors" onClick={() => handleCategorySelect('mar')}>Revit MEP</Link>
          <Link href="/energy" className="hover:text-indigo-600 transition-colors" onClick={() => handleCategorySelect('energy')}>Energy</Link>
          <Link href="/waste" className="hover:text-indigo-600 transition-colors" onClick={() => handleCategorySelect('waste')}>Waste</Link>
        </nav>
      </div>

      {/* Navigation and Theme Toggle - Hide on Mobile */}
      <div
        className={cx(
          "w-full mt-4 sm:mt-0 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center",
          menuOpen ? "hidden" : "block sm:flex"
        )}
      >
        <nav className="sm:flex hidden flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 font-semibold text-lg dark:bg-dark text-dark dark:text-light transition-all ease">
  <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
  <Link href="/dev" className="hover:text-indigo-600 transition-colors">Development</Link>
  <Link href="/equipment" className="hover:text-indigo-600 transition-colors">Equipment</Link>
  <Link href="/ai" className="hover:text-indigo-600 transition-colors">Artificial Intelligence</Link>
  <Link href="/eng" className="hover:text-indigo-600 transition-colors">Designing</Link>
  <Link href="/mar" className="hover:text-indigo-600 transition-colors">Revit MEP</Link>
  <Link href="/energy" className="hover:text-indigo-600 transition-colors">Energy</Link>
  <Link href="/waste" className="hover:text-indigo-600 transition-colors">Waste</Link>
</nav>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-8 h-8 flex items-center justify-center rounded-full p-1 transition-all ease-in-out",
            mode === "light" ? "bg-black text-white" : "bg-white text-black"
          )}
          aria-label="Theme Switcher"
        >
          {mode === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <ul className="mt-4 w-full max-w-lg bg-white border border-gray-300 rounded-xl shadow-lg p-4 dark:bg-dark dark:border-gray-600">
          {searchResults.map((result, index) => (
            <li key={index} className="py-3">
              <Link href={`/${result.slug}`} className="text-blue-500 hover:underline text-lg">
                {result.title}
              </Link>
              <p className="text-gray-500 text-sm">{result.description}</p>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
