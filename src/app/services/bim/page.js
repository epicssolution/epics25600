"use client";

import { useState } from "react";
import { ChevronDown, Star, Download, Check, Loader2 } from "lucide-react";

const categories = [
  "BIM",
  "Architecture",
  "Structural",
  "MEP",
  "Clash Detection",
  "Coordination",
  "Construction Drawings",
  "Scan to BIM",
  "Revit Families",
  "LOD Standards",
];

const filterOptions = {
  "Deliverable type": ["3D Model", "2D Drawings", "Clash Report", "Point Cloud", "Family File"],
  "Service provider": ["Autodesk", "Trimble", "Hexagon", "Bentley Systems", "FARO"],
  Software: ["Revit", "Navisworks", "AutoCAD", "Tekla", "ArchiCAD"],
  "LOD level": ["LOD 100", "LOD 200", "LOD 300", "LOD 400", "LOD 500"],
  Certifications: ["ISO 19650", "BIM Level 2", "COBie Compliant"],
  "Project scale": ["Residential", "Commercial", "Industrial", "Infrastructure"],
};

const filters = Object.keys(filterOptions);

const sortOptions = ["Trending", "Newest", "Top rated", "A–Z"];

const products = [
  { brand: "Autodesk", name: "Revit Architectural Model - LOD 300", rating: 4.7, reviews: 18 },
  { brand: "Trimble", name: "Structural Steel BIM Model", rating: 4.5, reviews: 22 },
  { brand: "Hexagon", name: "MEP Coordination Model - Full Building", rating: 4.4, reviews: 15 },
  { brand: "Navisworks", name: "Clash Detection Report - MEP vs Structural" },
  { brand: "Bentley Systems", name: "4D Construction Sequencing Model", rating: 3.9, reviews: 7 },
  { brand: "FARO", name: "Scan to BIM - Point Cloud Registration", rating: 4.8, reviews: 12 },
  { brand: "Autodesk", name: "As-Built BIM Documentation Package", rating: 5.0, reviews: 4 },
  { brand: "Revit Family Hub", name: "Parametric Door & Window Family Pack" },
  { brand: "Trimble", name: "Quantity Takeoff - 5D Cost Model", rating: 4.3, reviews: 9 },
  { brand: "Hexagon", name: "Plumbing & Fire Protection Coordination Model" },
  { brand: "Bentley Systems", name: "Energy Analysis - BIM Sustainability Model", rating: 4.6, reviews: 11 },
  { brand: "Autodesk", name: "Shop Drawing Extraction Package", rating: 4.5, reviews: 6 },
  { brand: "Revit Family Hub", name: "HVAC Diffuser & Grille Family Pack" },
  { brand: "FARO", name: "Renovation Scan to BIM - Existing Conditions" },
  { brand: "Trimble", name: "Rebar Detailing BIM Model" },
  { brand: "Navisworks", name: "Construction Sequencing Simulation" },
  { brand: "Bentley Systems", name: "Facilities Management BIM Handover", rating: 4.6, reviews: 20 },
  { brand: "Autodesk", name: "Landscape & Site BIM Model", rating: 4.9, reviews: 8 },
];

function FilterPill({ label, isOpen, onToggle, selected, onToggleOption }) {
  const count = selected.length;
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition-colors ${
          count > 0
            ? "border-orange-500 bg-orange-50 text-orange-700"
            : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
        }`}
      >
        {label}
        {count > 0 && (
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] font-semibold text-white">
            {count}
          </span>
        )}
        <ChevronDown size={14} className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-20 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
          {filterOptions[label].map((opt) => {
            const checked = selected.includes(opt);
            return (
              <label
                key={opt}
                className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggleOption(label, opt)}
                  className="h-3.5 w-3.5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                />
                {opt}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ProductCard({ p }) {
  const [status, setStatus] = useState("idle"); // idle | loading | done

  const handleDownload = async () => {
    if (status !== "idle") return;
    setStatus("loading");

    try {
      if (p.fileUrl) {
        // Real file: fetch it as a blob so the browser saves it (works for
        // same-origin or CORS-enabled URLs) rather than navigating away.
        const res = await fetch(p.fileUrl);
        const blob = await res.blob();
        triggerDownload(blob, p.fileUrl.split("/").pop());
      } else {
        // No real file wired up yet — save a placeholder so you can see
        // the download actually land in the browser's Downloads folder.
        const content = `BIM Deliverable: ${p.name}\nProvider: ${p.brand}\n\nReplace this with a real file by setting a "fileUrl" on this product.`;
        const blob = new Blob([content], { type: "text/plain" });
        triggerDownload(blob, `${p.name.replace(/[^a-z0-9]+/gi, "_")}.txt`);
      }
      setStatus("done");
    } catch (err) {
      console.error("Download failed:", err);
      setStatus("idle");
    }
  };

  const triggerDownload = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col">
      <div className="relative mb-3 flex aspect-square items-center justify-center rounded-md border border-gray-200 bg-gray-50">
        <div className="h-16 w-16 rounded-sm bg-gray-200" />
        <span className="absolute right-2 top-2 rounded border border-gray-300 bg-white/80 px-1 text-[10px] text-gray-400">
          3D
        </span>
      </div>
      <div className="text-xs text-gray-500">{p.brand}</div>
      <div className="mb-1 text-sm font-medium leading-snug text-orange-600 line-clamp-2">
        {p.name}
      </div>
      {p.rating ? (
        <div className="mb-2 flex items-center gap-1 text-xs text-gray-600">
          <Star size={12} className="fill-amber-400 text-amber-400" />
          <span>{p.rating}</span>
          <span className="text-gray-400">({p.reviews})</span>
        </div>
      ) : (
        <div className="mb-2 h-4" />
      )}
      <button
        onClick={handleDownload}
        disabled={status !== "idle"}
        className={`mt-auto flex items-center justify-center gap-1 rounded-md py-2 text-sm font-medium transition-colors ${
          status === "done"
            ? "bg-green-50 text-green-700"
            : "bg-orange-50 text-orange-600 hover:bg-orange-100"
        }`}
      >
        {status === "idle" && (
          <>
            <Download size={14} />
            Download
          </>
        )}
        {status === "loading" && (
          <>
            <Loader2 size={14} className="animate-spin" />
            Downloading...
          </>
        )}
        {status === "done" && (
          <>
            <Check size={14} />
            Downloaded
          </>
        )}
      </button>
    </div>
  );
}

export default function BIMPage() {
  const [activeTab, setActiveTab] = useState("BIM");
  const [following, setFollowing] = useState(false);
  const [openFilter, setOpenFilter] = useState(null); // label of open filter pill, or "sort"
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortBy, setSortBy] = useState("Trending");
  const [pkOnly, setPkOnly] = useState(false);

  const toggleFilterOption = (label, opt) => {
    setSelectedFilters((prev) => {
      const current = prev[label] || [];
      const next = current.includes(opt) ? current.filter((o) => o !== opt) : [...current, opt];
      return { ...prev, [label]: next };
    });
  };

  return (
    <main className="min-h-screen bg-white px-6 py-8">
      {/* Click-away backdrop for any open dropdown */}
      {openFilter && (
        <div className="fixed inset-0 z-10" onClick={() => setOpenFilter(null)} />
      )}

      <div className="relative z-0 mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center justify-between text-sm text-gray-500">
          <div>
            <span className="hover:underline">Home</span>
            <span className="mx-1">/</span>
            <span className="hover:underline">Services</span>
            <span className="mx-1">/</span>
            <span className="text-gray-400">BIM</span>
          </div>
          <label className="flex items-center gap-2 text-xs text-gray-500">
            <input
              type="checkbox"
              checked={pkOnly}
              onChange={() => setPkOnly((v) => !v)}
              className="h-3.5 w-3.5 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
            />
            Only include providers available in Pakistan
          </label>
        </div>

        {/* Category tabs */}
        <div className="mb-6 flex items-center gap-6 overflow-x-auto border-b border-gray-200 pb-3 text-sm">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveTab(c)}
              className={`whitespace-nowrap pb-1 ${
                c === activeTab
                  ? "border-b-2 border-orange-500 font-semibold text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {c}
            </button>
          ))}
          <ChevronDown size={16} className="ml-auto shrink-0 text-gray-400" />
        </div>

        {/* Title */}
        <div className="mb-3 flex items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-900">{activeTab === "BIM" ? "Building Information Modeling" : activeTab}</h1>
          <button
            onClick={() => setFollowing((v) => !v)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              following
                ? "bg-orange-100 text-orange-700 hover:bg-orange-200"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {following ? "✓ Following" : "+ Follow"}
          </button>
        </div>

        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-gray-500">
          3D modeling, coordination, clash detection, and detailed construction drawings.
          Browse a curated library of BIM deliverables and service providers to research and
          select what fits your project. Whether you're looking for something for a particular
          discipline, LOD level, or software platform, you can find it here. Filter by
          deliverable type, provider, and project scale.
        </p>

        {/* Filters */}
        <div className="relative z-10 mb-6 flex flex-wrap items-center gap-3 border-b border-gray-200 pb-4">
          {filters.map((f) => (
            <FilterPill
              key={f}
              label={f}
              isOpen={openFilter === f}
              onToggle={() => setOpenFilter((cur) => (cur === f ? null : f))}
              selected={selectedFilters[f] || []}
              onToggleOption={toggleFilterOption}
            />
          ))}
        </div>

        {/* Sort */}
        <div className="relative z-10 mb-4 flex justify-end">
          <div className="relative">
            <button
              onClick={() => setOpenFilter((cur) => (cur === "sort" ? null : "sort"))}
              className="flex items-center gap-1 text-sm font-medium text-gray-700"
            >
              {sortBy}
              <ChevronDown size={14} className={`transition-transform ${openFilter === "sort" ? "rotate-180" : ""}`} />
            </button>
            {openFilter === "sort" && (
              <div className="absolute right-0 top-full z-20 mt-2 w-40 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => {
                      setSortBy(opt);
                      setOpenFilter(null);
                    }}
                    className={`block w-full rounded-md px-3 py-1.5 text-left text-sm hover:bg-gray-50 ${
                      opt === sortBy ? "font-semibold text-orange-600" : "text-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((p, i) => (
            <ProductCard key={i} p={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
