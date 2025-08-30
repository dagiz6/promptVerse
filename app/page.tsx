import { PromptList } from "@/components/PromptList";
import { Header } from "../components/Header";
import { dummyPrompts } from "../data/prompts";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PromptList prompts={dummyPrompts} />
    </div>
  );
}
