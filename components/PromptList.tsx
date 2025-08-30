"use client";

import React, { useState, useMemo } from "react";
import { PromptCard } from "./PromptCard";
import { SortControls, SortOption } from "./SortControls";
import { SearchBar } from "./SearchBar";
import { Prompt } from "../type/prompt";

interface PromptListProps {
  prompts: Prompt[];
}

export const PromptList: React.FC<PromptListProps> = ({ prompts }) => {
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndSortedPrompts = useMemo(() => {
    let filtered = prompts;

    // Filter by search term
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      filtered = prompts.filter(
        (prompt) =>
          prompt.title.toLowerCase().includes(lowercaseSearch) ||
          prompt.content.toLowerCase().includes(lowercaseSearch) ||
          prompt.category.toLowerCase().includes(lowercaseSearch) ||
          prompt.author.toLowerCase().includes(lowercaseSearch) ||
          prompt.tags.some((tag) => tag.toLowerCase().includes(lowercaseSearch))
      );
    }

    // Sort prompts
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.createdAt.getTime() - a.createdAt.getTime();
        case "oldest":
          return a.createdAt.getTime() - b.createdAt.getTime();
        case "alphabetical":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [prompts, sortBy, searchTerm]);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <SortControls currentSort={sortBy} onSortChange={setSortBy} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAndSortedPrompts.map((prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>

      {filteredAndSortedPrompts.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-gray-500 text-lg mb-2">No prompts found</p>
            <p className="text-gray-400 text-sm">
              {searchTerm
                ? "Try adjusting your search criteria"
                : "No prompts available"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
