import React from "react";
import { motion } from "framer-motion";

export default function FiltersSection({ sortBy, setSortBy, viewMode, setViewMode, filterCategories, techStack, selectedFilters, setSelectedFilters }) {
  return (
    <section className="bg-white border-b sticky top-16 z-40 shadow-sm">
      <div className="max-w-8xl mx-auto px-6 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Available Talent</h2>
          <div className="flex items-center space-x-4">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="match">Best Match</option>
              <option value="rate">Hourly Rate</option>
              <option value="exp">Experience</option>
              <option value="availability">Availability</option>
            </select>
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button onClick={() => setViewMode('grid')} className={`px-4 py-2 text-sm font-medium ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}>Grid</button>
              <button onClick={() => setViewMode('list')} className={`px-4 py-2 text-sm font-medium border-l ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}>List</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {filterCategories.map((category, idx) => (
            <select key={idx} className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>{category.name}</option>
              {category.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const newFilters = new Set(selectedFilters);
                newFilters.has(tech) ? newFilters.delete(tech) : newFilters.add(tech);
                setSelectedFilters(newFilters);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilters.has(tech)
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
