"use client";

import React from "react";
import { Prompt } from "../type/prompt";
import { PromptCard } from "./PromptCard";
import { dummyPrompts } from "../data/prompts"; // your dummy data

export const PromptList: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Prompt Library</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyPrompts.map((prompt: Prompt) => (
          <PromptCard key={prompt.id} prompt={prompt} />
        ))}
      </div>
    </div>
  );
};
