import React from "react";
import { Calendar, User, Tag } from "lucide-react";
import { Prompt } from "../type/prompt";

interface PromptCardProps {
  prompt: Prompt;
}

export const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Creative Writing": "bg-purple-100 text-purple-800",
      Development: "bg-blue-100 text-blue-800",
      Business: "bg-emerald-100 text-emerald-800",
      Education: "bg-amber-100 text-amber-800",
      Culinary: "bg-orange-100 text-orange-800",
      Productivity: "bg-indigo-100 text-indigo-800",
      Travel: "bg-cyan-100 text-cyan-800",
      Finance: "bg-green-100 text-green-800",
      "Health & Wellness": "bg-pink-100 text-pink-800",
      Technology: "bg-slate-100 text-slate-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <span
          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
            prompt.category
          )}`}
        >
          {prompt.category}
        </span>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          {formatDate(prompt.createdAt)}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
        {prompt.title}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
        {prompt.content}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          <User className="w-4 h-4 mr-1" />
          {prompt.author}
        </div>

        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-gray-400" />
          <div className="flex flex-wrap gap-1">
            {prompt.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
            {prompt.tags.length > 2 && (
              <span className="text-xs text-gray-500">
                +{prompt.tags.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
