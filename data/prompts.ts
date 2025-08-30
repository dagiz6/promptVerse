import { Prompt } from "../type/prompt";

export const dummyPrompts: Prompt[] = [
  {
    id: "1",
    title: "Creative Writing Assistant",
    content:
      "Write a compelling short story about a time traveler who discovers they can only travel to moments of great historical significance.",
    category: "Creative Writing",
    createdAt: new Date("2024-01-15T10:30:00Z"),
    author: "Sarah Johnson",
    tags: ["storytelling", "history", "fiction"],
  },
  {
    id: "2",
    title: "Code Review Helper",
    content:
      "Review this React component for performance optimizations, accessibility improvements, and best practices. Provide specific suggestions.",
    category: "Development",
    createdAt: new Date("2024-01-14T15:45:00Z"),
    author: "Mike Chen",
    tags: ["react", "performance", "accessibility"],
  },
  {
    id: "3",
    title: "Business Strategy Brainstorm",
    content:
      "Generate innovative marketing strategies for a sustainable fashion brand targeting Gen Z consumers. Focus on digital-first approaches.",
    category: "Business",
    createdAt: new Date("2024-01-13T09:15:00Z"),
    author: "Emily Rodriguez",
    tags: ["marketing", "sustainability", "genz"],
  },
  {
    id: "4",
    title: "Learning Path Designer",
    content:
      "Create a comprehensive 3-month learning roadmap for someone transitioning from marketing to UX design, including resources and milestones.",
    category: "Education",
    createdAt: new Date("2024-01-12T14:20:00Z"),
    author: "David Kim",
    tags: ["ux-design", "career-change", "learning"],
  },
  {
    id: "5",
    title: "Recipe Innovation",
    content:
      "Develop a unique fusion recipe combining Korean and Mexican cuisines, suitable for a weeknight dinner with dietary restrictions considered.",
    category: "Culinary",
    createdAt: new Date("2024-01-11T18:00:00Z"),
    author: "Maria Lopez",
    tags: ["fusion-cooking", "weeknight-meals", "dietary"],
  },
  {
    id: "6",
    title: "Productivity System",
    content:
      "Design a personal productivity system that combines time-blocking, priority matrices, and habit tracking for remote workers.",
    category: "Productivity",
    createdAt: new Date("2024-01-10T11:30:00Z"),
    author: "Alex Thompson",
    tags: ["time-management", "remote-work", "habits"],
  },
  {
    id: "7",
    title: "Travel Itinerary Planner",
    content:
      "Plan a 10-day cultural immersion trip to Japan for first-time visitors, balancing must-see attractions with authentic local experiences.",
    category: "Travel",
    createdAt: new Date("2024-01-09T16:45:00Z"),
    author: "Rachel Wong",
    tags: ["japan", "cultural-immersion", "first-time"],
  },
  {
    id: "8",
    title: "Investment Analysis",
    content:
      "Analyze the potential of renewable energy stocks for a long-term investment portfolio, considering current market trends and regulations.",
    category: "Finance",
    createdAt: new Date("2024-01-08T13:10:00Z"),
    author: "James Anderson",
    tags: ["renewable-energy", "long-term", "portfolio"],
  },
  {
    id: "9",
    title: "Wellness Challenge",
    content:
      "Create a 30-day wellness challenge that incorporates mindfulness, physical activity, and nutrition goals for busy professionals.",
    category: "Health & Wellness",
    createdAt: new Date("2024-01-07T08:00:00Z"),
    author: "Dr. Lisa Park",
    tags: ["mindfulness", "fitness", "nutrition"],
  },
  {
    id: "10",
    title: "Tech Trend Prediction",
    content:
      "Predict and explain three emerging technology trends that will significantly impact small businesses in the next 2 years.",
    category: "Technology",
    createdAt: new Date("2024-01-06T12:25:00Z"),
    author: "Chris Martinez",
    tags: ["emerging-tech", "small-business", "trends"],
  },
];
