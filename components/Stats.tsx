import React from "react";
import { FileText, Users, Hash } from "lucide-react";
import { Prompt } from "../type/prompt";

interface StatsProps {
  prompts: Prompt[];
}

export const Stats: React.FC<StatsProps> = ({ prompts }) => {
  const totalPrompts = prompts.length;
  const uniqueAuthors = new Set(prompts.map((p) => p.author)).size;
  const uniqueCategories = new Set(prompts.map((p) => p.category)).size;

  const stats = [
    {
      icon: FileText,
      label: "Total Prompts",
      value: totalPrompts,
      color: "text-blue-600",
    },
    {
      icon: Users,
      label: "Contributors",
      value: uniqueAuthors,
      color: "text-emerald-600",
    },
    {
      icon: Hash,
      label: "Categories",
      value: uniqueCategories,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-lg border border-gray-100 p-4 hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex items-center">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gray-50 mr-3`}
            >
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
