import React from 'react';
import { Zap,} from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mr-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">PromptVerse</h1>
              <p className="text-gray-600 text-sm">Discover and explore amazing prompts</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};