import React from "react";
import {
  ArrowUpDown,
  Calendar,
  StretchVertical as AlphabeticalA,
} from "lucide-react";

export type SortOption = "newest" | "oldest" | "alphabetical";

interface SortControlsProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export const SortControls: React.FC<SortControlsProps> = ({
  currentSort,
  onSortChange,
}) => {
  const sortOptions = [
    { value: "newest" as const, label: "Oldest First", icon: Calendar },
    { value: "oldest" as const, label: "Newest First", icon: Calendar },
    { value: "alphabetical" as const, label: "A-Z", icon: AlphabeticalA },
  ];

  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="flex items-center text-sm font-medium text-gray-700">
        <ArrowUpDown className="w-4 h-4 mr-2" />
        Sort by:
      </div>
      <div className="flex flex-wrap gap-2">
        {sortOptions.map((option) => {
          const IconComponent = option.icon;
          const isActive = currentSort === option.value;

          return (
            <button
              key={option.value}
              onClick={() => onSortChange(option.value)}
              className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              <IconComponent className="w-4 h-4 mr-2" />
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
