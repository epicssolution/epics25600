"use client";

import Head from "next/head";
import siteMetadata from "@/utils/siteMetaData";

import Link from "next/link";
import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/utils";
import { client } from "@/sanity/lib/client"; // Import your Sanity client

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [category, setCategory] = useState("All"); // Category selection state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown toggle state

  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (query.trim()) {
      try {
        const searchQuery = `
          *[_type in ["AI", "Eng", "equipment", "development", "dev","waste"] && title match $query]{
            title,
            "slug": slug.current,
            description,
            image
          }
        `;
        const results = await client.fetch(searchQuery, { query: `${query}*` });
        setSearchResults(results);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <Head>
        <title>Engineering Mindset</title>
        <meta name="description" content="Engineering content and resources" />
      </Head>

      <header className="w-full bg-white shadow-md flex flex-col items-center p-4 px-6 relative dark:bg-dark text-dark dark:text-light transition-all ease">
        {/* Top Row: Logo and Menu Icon */}
        <div className="flex items-center justify-between w-full">
          <Logo />
          <div className="flex items-center space-x-4">
            {/* Search Toggle Button */}
            <button
              className="text-black p-2"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle Search"
            >
              🔍
            </button>
            {/* Menu Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-black p-2"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Navigation and Theme Toggle */}
        <div
          className={cx(
            "w-full mt-4 sm:mt-0 flex flex-col items-center sm:flex-row sm:justify-between sm:items-center",
            menuOpen ? "block" : "hidden sm:flex"
          )}
        >
          <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 font-semibold dark:bg-dark text-dark dark:text-light transition-all ease">
            <Link href="/">Home</Link>
            <Link href="/dev">Development</Link>
            <Link href="/equipment">Equipment</Link>
            <Link href="/ai">Artificial intelligence</Link>
            <Link href="/eng">Designing</Link>
            <Link href="/mar">Revit MEP</Link>
            <Link href="/energy">Energy</Link>
            <Link href="/waste">Waste</Link>


          </nav>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-8 h-8 flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-black text-white" : "bg-white text-black"
            )}
            aria-label="Theme Switcher"
          >
            {mode === "light" ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>

        {/* Search Bar with Dropdown */}
        {searchOpen && (
          <div className="flex items-center mt-4 w-full max-w-lg bg-white border border-gray-300 rounded shadow-lg p-2">
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                className="p-2 border border-gray-300 rounded-l-md bg-gray-100 flex items-center space-x-2  dark:bg-dark text-dark dark:text-light transition-all ease"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-label="Toggle Dropdown Menu"
              >
                <span>{category}</span>
                <span>▼</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-1 w-32 bg-white border border-gray-300 shadow rounded z-50  dark:bg-dark text-dark dark:text-light transition-all ease">
                  {["All", "Blogs", "Courses", "Revit"].map((cat) => (
                    <li
                      key={cat}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setCategory(cat);
                        setDropdownOpen(false);
                      }}
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Input */}
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              className="p-2 border border-gray-300 flex-1"
            />

            {/* Search Button */}
            <button
              className="p-2 bg-pink-600 text-white rounded-r-md"
              onClick={() => handleSearch(searchQuery)}
              aria-label="Search"
            >
              🔍
            </button>
          </div>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <ul className="mt-2 w-full max-w-lg bg-white border border-gray-300 rounded shadow-lg p-2">
            {searchResults.map((result, index) => (
              <li key={index} className="py-1">
                <Link href={`/${result.slug}`} className="text-blue-500">
                  {result.title}
                </Link>
                <p className="text-gray-500 text-sm">{result.description}</p>
              </li>
            ))}
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;
