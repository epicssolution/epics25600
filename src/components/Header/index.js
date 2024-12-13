"use client";

import Head from "next/head";
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

      <header className="w-full bg-white shadow-md flex flex-col sm:flex-row items-center justify-between p-4 px-10 relative">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden sm:flex items-center space-x-6 font-semibold text-black">
          <Link href="/">Home</Link>
          <Link href="/dev">Development</Link>
          <Link href="/equipment">Equipment</Link>
          <Link href="/ai">Artificial intelligence</Link>
          <Link href="/eng">Designing</Link>
          <Link href="/mar">Software</Link>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <button
            className="text-black p-2"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Toggle Search"
          >
            🔍
          </button>
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
        </div>

        {/* Theme Switcher */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-8 h-8 flex items-center justify-center rounded-full p-1 ml-4",
            mode === "light" ? "bg-black text-white" : "bg-white text-black"
          )}
          aria-label="Theme Switcher"
        >
          {mode === "light" ? <MoonIcon /> : <SunIcon />}
        </button>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black p-2"
            aria-label="Toggle Menu"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-md z-50 p-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/dev" onClick={() => setMenuOpen(false)}>
                  Development
                </Link>
                <Link href="/equipment" onClick={() => setMenuOpen(false)}>
                  Equipment
                </Link>
                <Link href="/ai" onClick={() => setMenuOpen(false)}>
                  Artificial intelligence
                </Link>
                <Link href="/eng" onClick={() => setMenuOpen(false)}>
                  Designing
                </Link>
                <Link href="/mar" onClick={() => setMenuOpen(false)}>
                  Software
                </Link>
                
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
