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

  const handleSearch = async (query) => {
    setSearchQuery(query);

    if (query.trim()) {
      try {
        const searchQuery = `
          *[_type in ["AI", "Eng", "equipment", "development", "dev"] && title match $query]{
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
        {/* Top Row: Logo and Search Icon */}
        <div className="flex items-center justify-between w-full">
          <Logo />
          <div className="flex items-center space-x-4">
            <button
              className="text-black p-2"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Toggle Search"
            >
              🔍
            </button>
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

        {/* Search Panel */}
        {searchOpen && (
          <div className="absolute right-0 top-full mt-2 bg-white border border-gray-300 rounded shadow-lg w-64 z-50 p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search blogs or pages..."
              className="w-full p-2 border border-gray-300 rounded"
            />
            {searchResults.length > 0 ? (
              <ul className="mt-2">
                {searchResults.map((result, index) => (
                  <li key={index} className="py-1">
                    <Link href={`/${result.slug}`} className="text-blue-500">
                      {result.title}
                    </Link>
                    <p className="text-gray-500 text-sm">{result.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">
                {searchQuery ? "No results found." : "Start typing..."}
              </p>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
